import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input('count') counter:number;
  @Output() change:EventEmitter<number> =new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges():void{
      this.change.emit(this.counter);
  }

}
