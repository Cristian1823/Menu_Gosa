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

  function getResumenDia(fecha) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    var data = sheet.getDataRange().getValues();
    var totalVentas = 0;
    var cantidadPedidos = 0;
    var productosCantidad = {};
    var productosIngreso = {};

    for (var i = 1; i < data.length; i++) {
      var fechaPedido = formatearFechaCell(data[i][1]);
      var estado = String(data[i][5]).trim().toLowerCase();

      if (fechaPedido === fecha && estado !== 'cancelado') {
        cantidadPedidos++;
        totalVentas += data[i][4];
        var items = JSON.parse(data[i][3]);
        for (var j = 0; j < items.length; j++) {
          var item = items[j];
          if (!productosCantidad[item.nombre]) {
            productosCantidad[item.nombre] = 0;
            productosIngreso[item.nombre] = 0;
          }
          productosCantidad[item.nombre] += item.cantidad;
          productosIngreso[item.nombre] += item.precio * item.cantidad;
        }
      }
    }

    var productos = [];
    for (var nombre in productosCantidad) {
      productos.push({ nombre: nombre, cantidad: productosCantidad[nombre], ingreso: productosIngreso[nombre] });
    }
    productos.sort(function(a, b) { return b.cantidad - a.cantidad; });

    return {
      fecha: fecha,
      totalVentas: totalVentas,
      cantidadPedidos: cantidadPedidos,
      ticketPromedio: cantidadPedidos > 0 ? Math.round(totalVentas / cantidadPedidos) : 0,
      productos: productos
    };
  }