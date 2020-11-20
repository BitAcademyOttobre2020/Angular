import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IStudent } from '../IStudent';
import { StudentService } from '../student-table.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {
  
  student:IStudent = {
    fullName:"",
    id:0,
    cf:"",
    dataDiNascita:"",
    email:"",
    idRegione:0,
    nomeRegione:"",
    telefono:"",
  };
  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
  }

  save(studentForm: NgForm): void {
    console.log(studentForm.form);
    console.log('Saved: ' + JSON.stringify(studentForm.value));

    this.studentService.postStudent(this.student).subscribe({
      next: (s)=>console.log(s),
      error: (e)=>console.log(e)
    });

  }
}

