import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { IStudent } from './IStudent';

@Injectable({
  providedIn: 'root'
})
export class StudentService{
  
  private studentUrl = 'http://localhost:8080/api/students';

  constructor(private http: HttpClient) { }

  getStudents(): Observable<IStudent[]> {
    return this.http.get<IStudent[]>(this.studentUrl)
      .pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  postStudent(student:IStudent): Observable<IStudent>{
    const head = new HttpHeaders({
      'Content-Type':'application/json'
    });
    return this.http.post<IStudent>(this.studentUrl, student, { headers: head });
    
    
  }

  deleteStudent(id:number): Observable<never>{

    return this.http.delete<never>(this.studentUrl+"/"+id)
    .pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    console.log(err);
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}