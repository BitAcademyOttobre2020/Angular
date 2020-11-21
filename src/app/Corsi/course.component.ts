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

    stringa = "hello world course";
    displayedColumns: string[] = ['calendario','id', 'nomeCorso', 'capienza', 'iscrizioniMin', 'finanziato', 'azienda', 'dataDiInizio', 'idAulaPreferita'];
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

  }