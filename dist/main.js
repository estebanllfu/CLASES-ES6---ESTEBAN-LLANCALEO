"use strict";

var _clase_Cliente = require("./clase_Cliente.js");
var _clase_Impuestos = require("./clase_Impuestos.js");
var impuestoCliente = new _clase_Impuestos.Impuestos(100000, 20000);
var cliente = new _clase_Cliente.Cliente('Juan', impuestoCliente);
console.log("cliente: ".concat(cliente.nombre, ", impuesto: ").concat(cliente.calcularImpuesto()));