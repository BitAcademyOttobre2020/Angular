import { Component } from '@angular/core';
import { CourseService } from './course.service';
import { ICourse } from './ICourse';

@Component({
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css']
  })

  
  export class Course{

    stringa = "hello world course";
    displayedColumns: string[] = ['calendario','id', 'nomeCorso', 'capienza', 'iscrizioniMin', 'finanziato', 'azienda', 'dataDiInizio', 'idAulaPreferita'];
    courses: ICourse[] = [];
    errorMessage = '';


  constructor(private courseService: CourseService) { }


  ngOnInit(): void {
    this.courseService.getCourse().subscribe({
      next: courses => {
        this.courses = courses;
      },
      error: err => this.errorMessage = err
    });
  }
  

  }