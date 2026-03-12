const SHEET_NAME = 'Pedidos';                                                                                                                                                                                                                           
                                                                                                                                                                                                                                                          
  function doGet(e) {
    var result;
    var callback = e.parameter.callback;

    try {
      if (e.parameter.payload) {
        var data = JSON.parse(e.parameter.payload);

        if (data.action === 'nuevoPedido') {
          result = crearPedido(data.items, data.total, data.notas || '');
        } else if (data.action === 'actualizarEstado') {
          result = actualizarEstado(data.id, data.estado);
        } else if (data.action === 'actualizarPedido') {
          result = actualizarPedido(data.id, data.items, data.total, data.notas);
        } else if (data.action === 'registrarCliente') {
          result = registrarCliente(data.id, data.nombre, data.telefono);
        } else if (data.action === 'agregarSello') {
          result = agregarSello(data.id);
        } else if (data.action === 'quitarSello') {
          result = quitarSello(data.id);
        } else if (data.action === 'canjearPremio') {
          result = canjearPremio(data.id);
        } else {
          result = { error: 'Accion POST no valida' };
        }
      } else {
        var action = e.parameter.action;

        if (action === 'getPendientes') {
          result = getPedidosPorEstado(['pendiente', 'preparando']);
        } else if (action === 'getTodos') {
          result = getTodosPedidos();
        } else if (action === 'getHoy') {
          result = getPedidosHoy();
        } else if (action === 'getPorFecha') {
          result = getPedidosPorFecha(e.parameter.fecha);
        } else if (action === 'getResumen') {
          result = getResumenDia(e.parameter.fecha);
        } else if (action === 'getProductos') {
          result = getProductos();
        } else if (action === 'getCliente') {
          result = getClienteClientes(e.parameter.id);
        } else if (action === 'buscarClientes') {
          result = buscarClientesClientes(e.parameter.query);
        } else {
          result = { error: 'Accion no valida' };
        }
      }
    } catch(error) {
      result = { error: error.toString() };
    }

    if (callback) {
      return ContentService
        .createTextOutput(callback + '(' + JSON.stringify(result) + ')')
        .setMimeType(ContentService.MimeType.JAVASCRIPT);
    }

    return ContentService
      .createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);
  }

  function formatearFechaCell(valor) {
    if (!valor) return '';

    if (valor instanceof Date) {
      var año = valor.getFullYear();
      var mes = ('0' + (valor.getMonth() + 1)).slice(-2);
      var dia = ('0' + valor.getDate()).slice(-2);
      return año + '-' + mes + '-' + dia;
    }

    var str = String(valor);

    if (str.match(/^\d{4}-\d{2}-\d{2}$/)) {
      return str;
    }

    if (str.indexOf('GMT') > -1 || str.indexOf('Jan') > -1 || str.indexOf('Feb') > -1) {
      try {
        var d = new Date(str);
        var año = d.getFullYear();
        var mes = ('0' + (d.getMonth() + 1)).slice(-2);
        var dia = ('0' + d.getDate()).slice(-2);
        return año + '-' + mes + '-' + dia;
      } catch(e) {
        return str.substring(0, 10);
      }
    }

    return str;
  }

  function formatearHoraCell(valor) {
    if (!valor) return '';

    if (valor instanceof Date) {
      var horas = ('0' + valor.getHours()).slice(-2);
      var mins = ('0' + valor.getMinutes()).slice(-2);
      var segs = ('0' + valor.getSeconds()).slice(-2);
      return horas + ':' + mins + ':' + segs;
    }

    var str = String(valor);

    if (str.match(/^\d{2}:\d{2}:\d{2}$/)) {
      return str;
    }

    if (str.indexOf('GMT') > -1) {
      try {
        var d = new Date(str);
        var horas = ('0' + d.getHours()).slice(-2);
        var mins = ('0' + d.getMinutes()).slice(-2);
        var segs = ('0' + d.getSeconds()).slice(-2);
        return horas + ':' + mins + ':' + segs;
      } catch(e) {
        return '00:00:00';
      }
    }

    return str;
  }

  function crearPedido(items, total, notas) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    var lastRow = sheet.getLastRow();
    var nuevoId = 1;

    if (lastRow > 1) {
      nuevoId = parseInt(sheet.getRange(lastRow, 1).getValue()) + 1;
    }

    var ahora = new Date();
    var fecha = Utilities.formatDate(ahora, 'America/Bogota', 'yyyy-MM-dd');
    var hora = Utilities.formatDate(ahora, 'America/Bogota', 'HH:mm:ss');

    sheet.appendRow([nuevoId, fecha, hora, JSON.stringify(items), total, 'pendiente', notas]);

    return { success: true, id: nuevoId, mensaje: 'Pedido #' + nuevoId + ' creado' };
  }

  function actualizarEstado(id, nuevoEstado) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    var data = sheet.getDataRange().getValues();

    for (var i = 1; i < data.length; i++) {
      if (data[i][0] == id) {
        sheet.getRange(i + 1, 6).setValue(nuevoEstado);
        return { success: true, mensaje: 'Pedido #' + id + ' actualizado' };
      }
    }
    return { error: 'Pedido no encontrado' };
  }

  function actualizarPedido(id, items, total, notas) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    var data = sheet.getDataRange().getValues();

    for (var i = 1; i < data.length; i++) {
      if (data[i][0] == id) {
        sheet.getRange(i + 1, 4).setValue(JSON.stringify(items));
        sheet.getRange(i + 1, 5).setValue(total);
        if (notas !== undefined) {
          sheet.getRange(i + 1, 7).setValue(notas);
        }
        return { success: true, mensaje: 'Pedido #' + id + ' actualizado' };
      }
    }
    return { error: 'Pedido no encontrado' };
  }

  function getPedidosPorEstado(estados) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    var data = sheet.getDataRange().getValues();
    var pedidos = [];

    for (var i = 1; i < data.length; i++) {
      var estado = String(data[i][5]).trim().toLowerCase();

      if (estados.indexOf(estado) > -1) {
        pedidos.push({
          id: data[i][0],
          fecha: formatearFechaCell(data[i][1]),
          hora: formatearHoraCell(data[i][2]),
          items: JSON.parse(data[i][3]),
          total: data[i][4],
          estado: estado,
          notas: data[i][6] || ''
        });
      }
    }
    return { pedidos: pedidos };
  }

  function getPedidosHoy() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    var data = sheet.getDataRange().getValues();
    var pedidos = [];

    // Obtener fecha de hoy en formato YYYY-MM-DD
    var ahora = new Date();
    var hoy = Utilities.formatDate(ahora, 'America/Bogota', 'yyyy-MM-dd');

    for (var i = 1; i < data.length; i++) {
      var fechaPedido = formatearFechaCell(data[i][1]);

      // Solo incluir pedidos de hoy
      if (fechaPedido === hoy) {
        pedidos.push({
          id: data[i][0],
          fecha: fechaPedido,
          hora: formatearHoraCell(data[i][2]),
          items: JSON.parse(data[i][3]),
          total: data[i][4],
          estado: String(data[i][5]).trim().toLowerCase(),
          notas: data[i][6] || ''
        });
      }
    }
    return { pedidos: pedidos };
  }

  function getPedidosPorFecha(fecha) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    var data = sheet.getDataRange().getValues();
    var pedidos = [];

    for (var i = 1; i < data.length; i++) {
      var fechaPedido = formatearFechaCell(data[i][1]);

      if (fechaPedido === fecha) {
        pedidos.push({
          id: data[i][0],
          fecha: fechaPedido,
          hora: formatearHoraCell(data[i][2]),
          items: JSON.parse(data[i][3]),
          total: data[i][4],
          estado: String(data[i][5]).trim().toLowerCase(),
          notas: data[i][6] || ''
        });
      }
    }
    return { pedidos: pedidos };
  }

  function getTodosPedidos() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    var data = sheet.getDataRange().getValues();
    var pedidos = [];

    for (var i = 1; i < data.length; i++) {
      pedidos.push({
        id: data[i][0],
        fecha: formatearFechaCell(data[i][1]),
        hora: formatearHoraCell(data[i][2]),
        items: JSON.parse(data[i][3]),
        total: data[i][4],
        estado: String(data[i][5]).trim().toLowerCase(),
        notas: data[i][6] || ''
      });
    }
    return { pedidos: pedidos };
  }

  function getProductos() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Productos');
    if (!sheet) return { error: 'Hoja Productos no encontrada. Columnas requeridas: ID, Nombre, Categoria, PrecioVenta, Costo, GastoOperativo, Activo' };

    var data = sheet.getDataRange().getValues();
    var productos = [];

    for (var i = 1; i < data.length; i++) {
      var activo = data[i][6];
      if (activo === false || String(activo).toUpperCase() === 'FALSE' || activo === 0) continue;

      productos.push({
        id: String(data[i][0]),
        nombre: String(data[i][1]),
        categoria: String(data[i][2]),
        precio: Number(data[i][3]) || 0,
        costo: Number(data[i][4]) || 0,
        gastoOperativo: Number(data[i][5]) || 0
      });
    }
    return { productos: productos };
  }

  function getResumenDia(fecha) {
    var sheetPedidos = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    var sheetProductos = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Productos');

    // Construir lookup de costos por nombre (normalizado)
    var costosPorNombre = {};
    if (sheetProductos) {
      var prodRows = sheetProductos.getDataRange().getValues();
      for (var k = 1; k < prodRows.length; k++) {
        var nombreProd = String(prodRows[k][1]).trim().toUpperCase();
        costosPorNombre[nombreProd] = {
          costo: Number(prodRows[k][4]) || 0,
          gastoOperativo: Number(prodRows[k][5]) || 0
        };
      }
    }

    var data = sheetPedidos.getDataRange().getValues();
    var totalVentas = 0;
    var totalCosto = 0;
    var totalGastoOp = 0;
    var cantidadPedidos = 0;
    var productosCantidad = {};
    var productosIngreso = {};
    var productosCosto = {};
    var productosGastoOp = {};

    for (var i = 1; i < data.length; i++) {
      var fechaPedido = formatearFechaCell(data[i][1]);
      var estado = String(data[i][5]).trim().toLowerCase();

      if (fechaPedido === fecha && estado !== 'cancelado') {
        cantidadPedidos++;
        totalVentas += data[i][4];
        var items = JSON.parse(data[i][3]);

        for (var j = 0; j < items.length; j++) {
          var item = items[j];
          var nombreKey = String(item.nombre).trim().toUpperCase();

          // Buscar costo: nombre exacto, luego composicion de combo (parte tras ":"), luego nombre base
          var info = costosPorNombre[nombreKey];
          if (!info && nombreKey.indexOf(':') > -1) {
            var partes = nombreKey.split(':');
            var nombreBase = partes[0].trim();
            var composicion = partes[1] ? partes[1].trim() : '';
            // Si el base es un combo del mes, sumar costos de productos de la composicion
            if (nombreBase.indexOf('COMBO DEL MES') > -1 && composicion) {
              var subProductos = composicion.split('+');
              var costoCombo = 0;
              var gastoCombo = 0;
              for (var k = 0; k < subProductos.length; k++) {
                var subKey = subProductos[k].trim().toUpperCase();
                var subInfo = costosPorNombre[subKey] || { costo: 0, gastoOperativo: 0 };
                costoCombo += subInfo.costo;
                gastoCombo += subInfo.gastoOperativo;
              }
              info = { costo: costoCombo, gastoOperativo: gastoCombo };
            } else {
              info = costosPorNombre[nombreBase] || { costo: 0, gastoOperativo: 0 };
            }
          }
          if (!info) {
            info = { costo: 0, gastoOperativo: 0 };
          }

          if (!productosCantidad[item.nombre]) {
            productosCantidad[item.nombre] = 0;
            productosIngreso[item.nombre] = 0;
            productosCosto[item.nombre] = 0;
            productosGastoOp[item.nombre] = 0;
          }
          productosCantidad[item.nombre] += item.cantidad;
          productosIngreso[item.nombre] += item.precio * item.cantidad;
          productosCosto[item.nombre] += info.costo * item.cantidad;
          productosGastoOp[item.nombre] += info.gastoOperativo * item.cantidad;

          totalCosto += info.costo * item.cantidad;
          totalGastoOp += info.gastoOperativo * item.cantidad;
        }
      }
    }

    var productos = [];
    for (var nombre in productosCantidad) {
      var ing = productosIngreso[nombre];
      var cos = productosCosto[nombre];
      var gop = productosGastoOp[nombre];
      productos.push({
        nombre: nombre,
        cantidad: productosCantidad[nombre],
        ingreso: ing,
        costo: cos,
        gastoOperativo: gop,
        gananciaNeta: ing - cos
      });
    }
    productos.sort(function(a, b) { return b.cantidad - a.cantidad; });

    return {
      fecha: fecha,
      totalVentas: totalVentas,
      totalCosto: totalCosto,
      totalGastoOp: totalGastoOp,
      gananciaNeta: totalVentas - totalCosto,
      cantidadPedidos: cantidadPedidos,
      ticketPromedio: cantidadPedidos > 0 ? Math.round(totalVentas / cantidadPedidos) : 0,
      productos: productos
    };
  }

  // ══════════════════════════════════════════
  // CLIENTES FRECUENTES — hoja "Clientes"
  // Columnas: ID | Nombre | Teléfono | Sellos | Canjes | FechaRegistro | UltimoSello
  // ══════════════════════════════════════════

  function registrarCliente(id, nombre, telefono) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Clientes');
    if (!sheet) return { error: 'Hoja Clientes no encontrada. Crea una hoja llamada "Clientes".' };
    var ahora = new Date();
    var fecha = Utilities.formatDate(ahora, 'America/Bogota', 'yyyy-MM-dd');
    sheet.appendRow([id, nombre, telefono || '', 0, 0, fecha, '']);
    return { success: true, id: id };
  }

  function getClienteClientes(id) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Clientes');
    if (!sheet) return { error: 'Hoja Clientes no encontrada' };
    var data = sheet.getDataRange().getValues();
    for (var i = 1; i < data.length; i++) {
      if (String(data[i][0]) === String(id)) {
        return {
          cliente: {
            id: String(data[i][0]),
            nombre: String(data[i][1]),
            telefono: String(data[i][2]),
            sellos: Number(data[i][3]) || 0,
            canjes: Number(data[i][4]) || 0,
            fechaRegistro: String(data[i][5]),
            ultimoSello: String(data[i][6])
          }
        };
      }
    }
    return { error: 'Cliente no encontrado' };
  }

  function buscarClientesClientes(query) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Clientes');
    if (!sheet) return { clientes: [] };
    var data = sheet.getDataRange().getValues();
    var clientes = [];
    var q = String(query || '').trim().toUpperCase();
    if (q.length < 2) return { clientes: [] };
    for (var i = 1; i < data.length; i++) {
      var rowId = String(data[i][0]).toUpperCase();
      var rowNombre = String(data[i][1]).toUpperCase();
      if (rowId.indexOf(q) > -1 || rowNombre.indexOf(q) > -1) {
        clientes.push({
          id: String(data[i][0]),
          nombre: String(data[i][1]),
          telefono: String(data[i][2]),
          sellos: Number(data[i][3]) || 0,
          canjes: Number(data[i][4]) || 0
        });
      }
    }
    return { clientes: clientes.slice(0, 8) };
  }

  function agregarSello(id) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Clientes');
    if (!sheet) return { error: 'Hoja Clientes no encontrada' };
    var data = sheet.getDataRange().getValues();
    for (var i = 1; i < data.length; i++) {
      if (String(data[i][0]) === String(id)) {
        var sellos = Number(data[i][3]) || 0;
        var ahora = new Date();
        var fecha = Utilities.formatDate(ahora, 'America/Bogota', 'yyyy-MM-dd');
        sheet.getRange(i + 1, 4).setValue(sellos + 1);
        sheet.getRange(i + 1, 7).setValue(fecha);
        return { success: true, sellos: sellos + 1 };
      }
    }
    return { error: 'Cliente no encontrado' };
  }

  function quitarSello(id) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Clientes');
    if (!sheet) return { error: 'Hoja Clientes no encontrada' };
    var data = sheet.getDataRange().getValues();
    for (var i = 1; i < data.length; i++) {
      if (String(data[i][0]) === String(id)) {
        var sellos = Number(data[i][3]) || 0;
        if (sellos <= 0) return { error: 'No hay sellos que quitar' };
        sheet.getRange(i + 1, 4).setValue(sellos - 1);
        return { success: true, sellos: sellos - 1 };
      }
    }
    return { error: 'Cliente no encontrado' };
  }

  function canjearPremio(id) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Clientes');
    if (!sheet) return { error: 'Hoja Clientes no encontrada' };
    var data = sheet.getDataRange().getValues();
    for (var i = 1; i < data.length; i++) {
      if (String(data[i][0]) === String(id)) {
        var sellos = Number(data[i][3]) || 0;
        if (sellos < 6) return { error: 'No tiene suficientes sellos' };
        var canjes = Number(data[i][4]) || 0;
        sheet.getRange(i + 1, 4).setValue(0);
        sheet.getRange(i + 1, 5).setValue(canjes + 1);
        return { success: true, canjes: canjes + 1 };
      }
    }
    return { error: 'Cliente no encontrado' };
  }