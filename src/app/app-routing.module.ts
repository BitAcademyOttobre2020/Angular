import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Course } from './Corsi/course.component';
import { SignUpFormComponent } from './Studenti/sign-up-form/sign-up-form.component';
import { Student } from './Studenti/student.component';

const routes: Routes = [      
  { path: 'student', component: Student },
  { path: 'course', component: Course },
  { path: 'sign-up-form', component: SignUpFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
