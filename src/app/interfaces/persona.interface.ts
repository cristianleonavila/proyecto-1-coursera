import { GeneroValido } from "./generos.type";
import { OcupacionValida } from "./ocupaciones.type";

export interface Persona {
    nombre: string;
    apellido: string;
    ocupacion: OcupacionValida;
    genero: GeneroValido,
    avatar?: string
}