import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearAlumnosComponent } from './components/crear-alumnos/crear-alumnos.component';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { StudentComponent } from './components/student/student.component';

const routes: Routes = [
  { path: '', redirectTo: 'estudiantes', pathMatch: 'full'},
  { path: 'estudiantes', component: StudentComponent},
  { path: 'lista-alumnos', component: ListaAlumnosComponent},
  { path: 'crear-alumnos', component: CrearAlumnosComponent},
  { path: '**', redirectTo: 'estudiantes', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
