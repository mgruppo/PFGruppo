import { Alumnos } from "../../alumnos/alumnos.component";
import { Curso } from "../../cursos/models";

export interface Inscripcion {
    id: number;
    curso: Curso;
    alumno: Alumnos;
}