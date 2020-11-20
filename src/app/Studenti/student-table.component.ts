import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IStudent } from './IStudent';
import { StudentService } from './student-table.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { BehaviorSubject, merge, of } from 'rxjs';
import { startWith, switchMap, map, catchError } from 'rxjs/operators';


@Component({
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})


export class StudentTableComponent implements OnInit, AfterViewInit{

  stringa = "hello world student";
  displayedColumns: string[] = ['id', 'fullName', 'dataDiNascita', 'cf', 'email', 'telefono', 'idRegione', 'nomeRegione', 'deleteStudent'];
  studentSubject = new BehaviorSubject<IStudent[]>([]);
  studentSubject$=this.studentSubject.asObservable();
  students: IStudent[] = [];
  errorMessage = '';

  resultsLength = 0;
  isLoadingResults = true;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private studentService: StudentService) { }


  ngAfterViewInit() {
    // this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge( this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          console.log("********");
          // console.log("********"+this.sort.active);
          // console.log("********"+this.sort.direction);
          // console.log("********"+this.paginator.pageIndex);
          this.isLoadingResults = true;
          
          return this.studentService.getStudents();
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.resultsLength = data.length;
          return data;
        }),

        catchError(() => {
          this.isLoadingResults = false;
          return of([]);
        })
      ).subscribe(data => this.students = data);
  }




  ngOnInit(): void {
    this.getStudentsList();
  }

  getStudentsList():void{
    this.studentService.getStudents().subscribe({
      next: students => {
        this.students = students;
        this.studentSubject.next(students);
      },
      error: err => this.errorMessage = err
    });
  }

  onClickDeleteStudent(id:number):void{
    this.studentService.deleteStudent(id).subscribe(()=> this.getStudentsList());
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