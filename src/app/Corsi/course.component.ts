import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CourseService } from './course.service';
import { ICourse } from './ICourse';

@Component({
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css']
  })

  
  export class Course implements OnInit{

    displayedColumns: string[] = ['calendario','id', 'nomeCorso', 'capienza', 'iscrizioniMin', 'finanziato', 'dataDiInizio', 'idAulaPreferita', 'deleteCourse'];
    courses: ICourse[] = [];
    errorMessage = '';
    dataSource:MatTableDataSource<ICourse>;

    @ViewChild(MatPaginator) paginator: MatPaginator;




  constructor(private courseService: CourseService) { }


  ngOnInit(): void {
    this.getCoursesList();
  }



  getCoursesList(): void {
    this.courseService.getCourse().subscribe({
      next: courses => {
        this.courses = courses;
        this.dataSource = new MatTableDataSource<ICourse>(this.courses);
        this.dataSource.paginator = this.paginator;
      },
      error: err => this.errorMessage = err
    });
  }

  onClickDeleteCourse(id:number):void{
    this.courseService.deleteCourse(id).subscribe(()=> this.getCoursesList());
  }

  confirmDelete(id:number):void{
    if(confirm("Sicuro di voler cancellare il corso con id "+id+ "?")) {
      this.onClickDeleteCourse(id);
    }
  }

  }