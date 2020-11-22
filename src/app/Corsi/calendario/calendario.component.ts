import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CourseService } from '../course.service';
import { ILesson } from '../ILesson';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss']
})
export class CalendarioComponent {
  errorMessage = '';
  lessons: ILesson[] = [];
  idCourse:number;
  routeSub:Subscription;

  constructor(private renderer: Renderer2, private courseService: CourseService, private route:ActivatedRoute) { }



  ngOnInit(): void {
    this.routeSub=this.route.params.subscribe(params=>this.idCourse=params["id"]);
    this.courseService.getLessons(this.idCourse).subscribe({
      next: lessons => {
        this.lessons = lessons;
      },
      error: err => this.errorMessage = err
    });
  }

  Today = [{ data: this.dateToString(new Date()), orarioAula: "Today" }]

  dateClass = (d: Date) => {
    if (d.getDate() == 1)
      this.displayMonth()
      
    const dateSearch = this.dateToString(d);
    if (this.Today.find(f => f.data == dateSearch)) {
      return this.Today.find(f => f.data == dateSearch)? "todays_class": "normal";
    } else {
      return this.lessons.find(f => f.data == dateSearch)? "example-custom-date-class": "normal";
    }


  };


  displayMonth() {
    setTimeout(() => {
      let elements = document.querySelectorAll(".endDate");
      console.log("*", elements.length)
      let x = document.querySelectorAll(".mat-calendar-body-cell");
      x.forEach(y => {
        const ariaLabel = y.getAttribute("aria-label");
        if (ariaLabel) {
          const dateSearch = this.dateToString(new Date(ariaLabel));
          const data = this.lessons.find(f => f.data == dateSearch);
          const data_today = this.Today.find(f => f.data == dateSearch);
          if (data) y.setAttribute("aria-label", data.orarioAula);
          if (data_today) y.setAttribute("aria-label", data_today.orarioAula);
        }
      });

    })
  }
  streamOpened() {
    setTimeout(() => {
      let buttons = document.querySelectorAll("mat-calendar .mat-icon-button");

      buttons.forEach(btn =>
        this.renderer.listen(btn, "click", () => {
          setTimeout(() => {
            //debugger
            this.displayMonth();
          });
        })
      );
      this.displayMonth();
    });
  }
  dateToString(date: any) {
    return (
      date.getFullYear() +
      "-" +
      ("0" + (date.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + date.getDate()).slice(-2)
    );
  }
}
