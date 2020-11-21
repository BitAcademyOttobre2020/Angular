import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentTableComponent } from './Studenti/student-table.component';
import { Course } from './Corsi/course.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { IscrizioniComponent } from './Iscrizioni/iscrizioni.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SignUpFormComponent } from './Studenti/sign-up-form/sign-up-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './Studenti/reactive-form/reactive-form.component';
import { FormTestComponent } from './form-test/form-test.component';
import { CounterComponent } from './counter/counter.component';
import { CalendarioComponent } from './Corsi/calendario/calendario.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon'






@NgModule({
  declarations: [
    AppComponent,
    StudentTableComponent,
    Course,
    IscrizioniComponent,
    SignUpFormComponent,
    ReactiveFormComponent,
    FormTestComponent,
    CounterComponent,
    CalendarioComponent
   
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
