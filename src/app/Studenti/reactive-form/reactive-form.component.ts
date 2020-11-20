import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { IStudent } from '../IStudent';
import { StudentService } from '../student-table.service';

function emailMatcher(c: AbstractControl): { [key: string]: boolean } | null {
  const emailControl = c.get('email');
  const confirmControl = c.get('confirmEmail');

  if (emailControl?.pristine || confirmControl?.pristine) {
    return null;
  }

  if (emailControl?.value === confirmControl?.value) {
    return null;
  }
  return { match: true };
}

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  studentForm:FormGroup;
  emailMessage: string;
  

  // private validationMessages = {
  //   required: 'Please enter your email address.',
  //   email: 'Please enter a valid email address.'
  // };
  constructor(private fb: FormBuilder,private studentService:StudentService) { }



  ngOnInit(): void {
    this.studentForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      dataDiNascita: ['', [Validators.required, Validators.maxLength(15)]],
      cf: ['', [Validators.required, Validators.maxLength(15)]],
      emailGroup: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        confirmEmail: ['', Validators.required],
      }, { validator: emailMatcher }
      ),
      telefono: '',
      idRegione: ''
    });

    // const emailControl = this.studentForm.get('emailGroup.email');
    // emailControl.valueChanges.pipe(
    //   debounceTime(1000)
    // ).subscribe(
    //   value => this.setMessage(emailControl)
    // );
  }

  save(): void {
    const s:IStudent = {
      id:0,
      email: this.studentForm.value.emailGroup.email,
      ...this.studentForm.value
    };

    console.log(this.studentForm);
    console.log('Saved: ' + JSON.stringify(this.studentForm.value));

    this.studentService.postStudent(s).subscribe({
      next: (s)=>{
        console.log(s);
        this.studentForm.reset();
      },
      error: (e)=>console.log(e)
    });

  }



  // setMessage(c: AbstractControl): void {
  //   this.emailMessage = '';
  //   if ((c.touched || c.dirty) && c.errors) {
  //     this.emailMessage = Object.keys(c.errors).map(
  //       (key) => this.validationMessages[key]).join(' ');
  //   }
  // }

 
}
