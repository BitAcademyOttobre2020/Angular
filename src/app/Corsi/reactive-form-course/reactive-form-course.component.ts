import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseService } from '../course.service';
import { ICourse } from '../ICourse';

@Component({
  selector: 'app-reactive-form-course',
  templateUrl: './reactive-form-course.component.html',
  styleUrls: ['./reactive-form-course.component.css']
})
export class ReactiveFormCourseComponent implements OnInit {

  courseForm:FormGroup;

  constructor(private fb: FormBuilder,private courseService:CourseService) { }



  ngOnInit(): void {
    this.courseForm = this.fb.group({
    
    // id: ['', [Validators.required, Validators.minLength(3)]],
    nomeCorso: ['', [Validators.required, Validators.minLength(3)]],
    capienza: '',
    iscrizioniMin:  ['', Validators.required],
    finanziato: '',
    azienda: null,
    iscrizioni: null,
    numeroLezioni:  ['', Validators.required],
    orarioPreferito:  ['', Validators.required],
    dataDiInizio:  ['', Validators.required],
    idAulaPreferita:  ['', Validators.required],
    dowList:''
    });

  }

  save(): void {
    const c:ICourse = {
      id:0,
      ...this.courseForm.value
    };

    console.log(this.courseForm);
    console.log('Saved: ' + JSON.stringify(this.courseForm.value));

    this.courseService.postCourse(c).subscribe({
      next: (c)=>{
        console.log(c);
        this.courseForm.reset();
      },
      error: (e)=>console.log(e)
    });

  }
 
}
