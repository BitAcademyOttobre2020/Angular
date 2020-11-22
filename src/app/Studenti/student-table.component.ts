import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IStudent } from './IStudent';
import { StudentService } from './student-table.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'student-table.component',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})


export class StudentTableComponent implements OnInit{

  displayedColumns: string[] = ['id', 'fullName', 'dataDiNascita', 'cf', 'email', 'telefono', 'idRegione', 'nomeRegione', 'deleteStudent'];
  students: IStudent[] = [];
  errorMessage = '';
  dataSource:MatTableDataSource<IStudent>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.getStudentsList();
  }

  getStudentsList():void{
    this.studentService.getStudents().subscribe({
      next: students => {
        this.students = students;
        this.dataSource = new MatTableDataSource<IStudent>(this.students);
        this.dataSource.paginator = this.paginator;
      },
      error: err => this.errorMessage = err
    });
  }

  onClickDeleteStudent(id:number):void{
    this.studentService.deleteStudent(id).subscribe(()=> this.getStudentsList());
  }

  confirmDelete(id:number):void{
    if(confirm("Sicuro di voler cancellare lo studente con id "+id+ "?")) {
      this.onClickDeleteStudent(id);
    }
  }
}

