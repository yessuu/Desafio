import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {
  
  student: any [] = [
    {id:1, nombre:'Noelia', apellido:'Martinez', curso: 'Angular', docente:'Laura Perez'},
    {id:2, nombre:'Nicolas', apellido:'Mendez', curso: 'React', docente:'Felipe Garcia'},
    {id:3, nombre:'Ana', apellido:'Suarez', curso: 'React', docente:'Felipe Garcia'},
    {id:4, nombre:'Lucas', apellido:'Felix', curso: 'Angular', docente:'Laura Perez'},
  ]

  constructor() { 

  }

  ngOnInit(): void {
  }

}
