import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//MODULOS
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { ReactiveFormsModule } from '@angular/forms';
import  {  ToastrModule  }  from  'ngx-toastr' ;
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//COMPONENTES
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ComponentsComponent } from './components/components.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { StudentComponent } from './components/student/student.component';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { CrearAlumnosComponent } from './components/crear-alumnos/crear-alumnos.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ComponentsComponent,
    ToolbarComponent,
    StudentComponent,
    ListaAlumnosComponent,
    CrearAlumnosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAnalyticsModule,
    ReactiveFormsModule,
    ToastrModule ,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
