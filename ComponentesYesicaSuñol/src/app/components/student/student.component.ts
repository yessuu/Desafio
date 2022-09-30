import { Component, OnInit } from '@angular/core';
import { Alumnos } from './data';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {

  title = 'Estudiantes TOP 10';
  totaltitle = 'Total Estudiantes';
  user = 'Estudiante';
  desciption = 'Aprobado con';
  nombre!: string;
  nota: number = 10;



  listaAlumnos: Array<Alumnos> = [
    { nombre: 'Laura', nota: 8 },
    { nombre: 'Estefani', nota: 10 },
    { nombre: 'Pablo', nota: 7 },
    { nombre: 'Noelia', nota: 10 },
    { nombre: 'Malena', nota: 10 },
    { nombre: 'Fran', nota: 10 },
    { nombre: 'Azul', nota: 7 },
    { nombre: 'Diego', nota: 8 },
  ];
  fecha: Date = new Date();

  constructor() { }

  public ngOnInit(): void {

   }


}
