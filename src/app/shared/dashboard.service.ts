import { Injectable } from '@angular/core';
import { Subscribers } from './subscribers.model';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  formData: Subscribers;
  baseUri:string = 'https://wonderdouble-backend.herokuapp.com';
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  constructor(
    private http: HttpClient
  ) {
   }


}
