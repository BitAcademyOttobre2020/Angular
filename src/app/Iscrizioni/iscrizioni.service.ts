import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { IIscrizione } from './IIscrizione';

@Injectable({
  providedIn: 'root'
})
export class IscrizioniService {

  private iscrizioneUrl = 'http://localhost:8080/api/iscrizioni';

  constructor(private http: HttpClient) { }

  getIscrizioni(): Observable<IIscrizione[]> {
    return this.http.get<IIscrizione[]>(this.iscrizioneUrl)
      .pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  deleteIscrizione(id:number): Observable<never>{

    return this.http.delete<never>(this.iscrizioneUrl+"/"+id)
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
