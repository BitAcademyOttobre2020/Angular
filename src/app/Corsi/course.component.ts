import { Component } from '@angular/core';
import { CourseService } from './course.service';
import { ICourse } from './ICourse';

@Component({
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css']
  })

  
  export class Course{

    stringa = "hello world course";
    displayedColumns: string[] = ['id', 'nomeCorso', 'capienza', 'iscrizioniMin', 'finanziato', 'azienda', 'iscrizioni', 'numeroLezioni', 'orarioPreferito', 'dataDiInizio', 'idAulaPreferita', 'dataInizio'];
    courses: ICourse[] = [];
    errorMessage = '';


  constructor(private courseService: CourseService) { }


  ngOnInit(): void {
    this.courseService.getCourse().subscribe({
      next: courses => {
        this.courses = courses;


        // console.log(students);
      },
      error: err => this.errorMessage = err
    });
  }

  }