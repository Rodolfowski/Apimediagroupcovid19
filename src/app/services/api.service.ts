import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUri = 'http://localhost:8200/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

 constructor(private http: HttpClient) { }

   createRegistro(data:string): Observable<any> {
   const url = `${this.baseUri}/create`;
   return this.http.post(url, data).pipe(catchError(this.errorMgmt));

  }
  //  Recuperar todos os Cachorros
  getRegistros() {
    return this.http.get(`${this.baseUri}`);
  }
  // Gerenciador de erros por atributos especificados
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }



}
