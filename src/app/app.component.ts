import { Component, OnInit } from '@angular/core';
import { IStudent } from './IStudent';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  students:IStudent[] = [];
  errorMessage = '';


  constructor(private studentService: StudentService) { }


  ngOnInit(): void {
    this.studentService.getStudents().subscribe({
      next: students => {
        this.students = students;
        // console.log(students);
      },
      error: err => this.errorMessage = err
    });
  }

  // ngOnInit():void{

  // this.students = [{
  //   id:1,
  //   fullName:"Mario Rossi",
  //   dataDiNascita:"1995-12-12",
  //   cF:"caxdcasdkalsfka",
  //   email:"cadas@dad.com",
  //   telefono:"2345256",
  //   idRegione:1,
  //   nomeRegione:"Lombardia"
  // },
  // {
  //   id:1,
  //   fullName:"Gabri Verde",
  //   dataDiNascita:"1995-12-12",
  //   cF:"caxdcasdkalsfka",
  //   email:"cadas@dad.com",
  //   telefono:"2345256",
  //   idRegione:1,
  //   nomeRegione:"Lombardia"
  // }
  // ];

  //  }


}
