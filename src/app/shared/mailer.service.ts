import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'; 
import { Mailer } from './mailer.model';


@Injectable({
  providedIn: 'root'
})
export class MailerService {
  
  baseUri:string = 'https://wonderdouble-backend.herokuapp.com';
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  
  constructor(
    private http: HttpClient) { }

    sendMail(data){
      return this.http.post<Mailer>(this.baseUri + '/sendmail', JSON.stringify(data), this.httpOptions);    
    }

    
}
