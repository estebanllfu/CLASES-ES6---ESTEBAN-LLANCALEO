import { Cliente } from './clase_Cliente.js';
import { Impuestos } from './clase_Impuestos.js';



const impuestoCliente = new Impuestos(100000, 20000);

const cliente = new Cliente('Juan', impuestoCliente);


console.log(`cliente: ${cliente.nombre}, impuesto: ${cliente.calcularImpuesto()}`);
