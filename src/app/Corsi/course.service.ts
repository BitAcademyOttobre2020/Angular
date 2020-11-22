import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { ICourse } from './ICourse';
import { ILesson } from './ILesson';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courseUrl = 'http://localhost:8080/api/course';

  constructor(private http: HttpClient) { }

  getCourse(): Observable<ICourse[]> {
    return this.http.get<ICourse[]>(this.courseUrl)
      .pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  deleteCourse(id:number): Observable<never>{
    return this.http.delete<never>(this.courseUrl+"/"+id)
    .pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  getLessons(id:number): Observable<ILesson[]> {
    return this.http.get<ILesson[]>(this.courseUrl+"/lezioni/"+id)
      .pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  postCourse(course:ICourse): Observable<ICourse>{
    const head = new HttpHeaders({
      'Content-Type':'application/json'
    });
    return this.http.post<ICourse>(this.courseUrl, course, { headers: head });
    
    
  }


  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}

