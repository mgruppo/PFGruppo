import { BehaviorSubject, Observable } from "rxjs";
import { Inscripcion } from "../models";
import { Injectable } from "@angular/core";

const INSCRIPCIONES_MOCKS: Inscripcion[] = [
  {
    curso: {
      id: 1,
      nombre: 'Angular',
      fecha_fin: new Date(),
      fecha_inicio: new Date()
    },
    alumno: {
      id: 1,
      nombre: 'Emiliano',
      apellido: 'Martinez',
      fecha_nacimiento: new Date('1992-09-02'),
      email: 'dibu@gmail.com'
    }
  },
  {
    curso: {
      id: 2,
      nombre: 'Javascript',
      fecha_fin: new Date(),
      fecha_inicio: new Date()
    },
    alumno: {
      id: 2,
      nombre: 'Paulo',
      apellido: 'Dybala',
      fecha_nacimiento: new Date('1993-11-15'),
      email: 'pdybala@gmail.com',
    }
  },
  {
    curso: {
      id: 3,
      nombre: 'Desarrollo Web',
      fecha_fin: new Date(),
      fecha_inicio: new Date()
    },
    alumno: {
      id: 3,
      nombre: 'Lionel',
      apellido: 'Messi',
      fecha_nacimiento: new Date('1987-06-24'),
      email: 'lmessi10@mail.com',
    }
  }
];

@Injectable({
  providedIn: 'root',
})
export class InscripcionesService {
  private inscripciones$ = new BehaviorSubject<Inscripcion[]>(
    []
  );

  constructor() {}

  obtenerInscripciones(): Observable<Inscripcion[]> {
    this.inscripciones$.next(INSCRIPCIONES_MOCKS);
    return this.inscripciones$.asObservable();
  }
}
