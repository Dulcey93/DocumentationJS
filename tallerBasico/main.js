import { Estudiante } from "./Estudiante.js";
import { Estandar } from "./Estandar.js";

const nombre = prompt("Ingrese su nombre");

const nota = prompt("Ingrese su nota");
const estudiante1 = new Estudiante(nombre, nota);
const estandar1 = new Estandar();