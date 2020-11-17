import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Course } from './Corsi/course.component';
import { Student } from './Studenti/student.component';

const routes: Routes = [      
  { path: 'student', component: Student },
  { path: 'course', component: Course }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
