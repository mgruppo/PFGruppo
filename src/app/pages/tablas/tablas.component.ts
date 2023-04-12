import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AbmAlumnosComponent } from './abm-alumnos/abm-alumnos.component';


export interface Estudiante {
  id: number;
  nombre: string;
  apellido: string;
  fecha_registro: Date;
}

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.scss']
})
export class TablasComponent {
  
  estudiantes: Estudiante[] = [
    {
      id: 1,
      nombre: 'Emiliano',
      apellido: 'Martinez',
      fecha_registro: new Date()
    },
    {
      id: 2,
      nombre: 'Paulo',
      apellido: 'Dybala',
      fecha_registro: new Date()
    },
    {
      id: 3,
      nombre: 'Lionel',
      apellido: 'Messi',
      fecha_registro: new Date()
    },
  ];

  dataSource = new MatTableDataSource(this.estudiantes);

  displayedColumns: string[] = ['id', 'nombreCompleto', 'fecha_registro'];

  aplicarFiltros(ev: Event): void {
    const inputValue = (ev.target as HTMLInputElement)?.value;
    this.dataSource.filter = inputValue?.trim()?.toLowerCase();
  }

  constructor(private MatDialog: MatDialog ) {}


  abrirABMAlumnos(): void {
    const dialog = this.MatDialog.open(AbmAlumnosComponent)
    dialog.afterClosed().subscribe((valor) => {
      if (valor) {
        this.dataSource.data = [
          ...this.dataSource.data,
          {
            ...valor,
            fecha_registro: new Date(),
            id: this.dataSource.data.length + 1,
          }
        ];
      }
    })
  }

}
