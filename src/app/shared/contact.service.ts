import { Injectable } from '@angular/core';
import { Newsletter } from './newsletter.model';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  formData: Newsletter;
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

  create(data){
    return this.http.post<any>(this.baseUri + '/contact/create', JSON.stringify(data), this.httpOptions);    
  }


  getContact(){
    return this.http.get(this.baseUri + '/contact/all', this.httpOptions);    
  }


}
