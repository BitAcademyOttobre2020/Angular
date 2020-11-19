import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from '../student.component';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
  }

  save(studentForm: NgForm): void {
    console.log(studentForm.form);
    console.log('Saved: ' + JSON.stringify(studentForm.value));
  }
}

