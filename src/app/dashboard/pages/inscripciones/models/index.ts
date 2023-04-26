import { Alumnos } from "../../alumnos/alumnos.component";
import { Curso } from "../../cursos/models";

export interface Inscripcion {
    curso: Curso;
    alumno: Alumnos;
}