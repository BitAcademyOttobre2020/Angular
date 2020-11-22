import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarioComponent } from './Corsi/calendario/calendario.component';
import { Course } from './Corsi/course.component';
import { ReactiveFormCourseComponent } from './Corsi/reactive-form-course/reactive-form-course.component';
import { FormTestComponent } from './form-test/form-test.component';
import { ReactiveFormComponent } from './Studenti/reactive-form/reactive-form.component';
import { SignUpFormComponent } from './Studenti/sign-up-form/sign-up-form.component';
import { StudentTableComponent } from './Studenti/student-table.component';

const routes: Routes = [      
  { path: 'student', component: StudentTableComponent },
  { path: 'student/:id', component: StudentTableComponent},
  { path: 'course', component: Course },
  { path: 'sign-up-form', component: SignUpFormComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'form-test', component: FormTestComponent },
  { path: 'calendario', component: CalendarioComponent },
  { path: 'calendario/:id', component: CalendarioComponent },
  { path: 'reactive-form-course', component: ReactiveFormCourseComponent }




 



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
