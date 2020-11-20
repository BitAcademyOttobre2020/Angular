import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.css']
})
export class FormTestComponent implements OnInit {

  value:number=0;
  newvalue:number=10;

  constructor() { }

  ngOnInit(): void {
  }

  add(){
    this.value++;
  }

  subtract(){
    this.value--;
  }

  countChanges(event:any){
      this.newvalue = event;
  }

}
