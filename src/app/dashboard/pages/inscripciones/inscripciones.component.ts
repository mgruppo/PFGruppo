import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { InscripcionesService } from './services/inscripciones.service';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.scss']
})
export class InscripcionesComponent implements OnInit {

    dataSource = new MatTableDataSource();
  
    displayedColumns = [
      'id_curso',
      'nombre_curso',
      'id_alumno',
      'nombre_alumno'
    ];
  
    constructor(
      private inscripcionesService: InscripcionesService,
      private dialog: MatDialog
    ) {}
  
    ngOnInit(): void {
      this.inscripcionesService.obtenerInscripciones().subscribe({
        next: (inscripciones) => {
          this.dataSource.data = inscripciones;
        },
      });
    }

}
