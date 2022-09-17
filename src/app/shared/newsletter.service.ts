import { Injectable } from '@angular/core';
import { Newsletter } from './newsletter.model';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  formData: Newsletter;
  
  baseUri:string = 'https://wonderdouble-backend.herokuapp.com';
  baseUri_wonder:string = 'https://api.wonderdoubleglobal.com';

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
    return this.http.post<any>(this.baseUri + '/newsletter/add', JSON.stringify(data), this.httpOptions);    
  }

  getNewsLetter(){
    return this.http.get(this.baseUri + '/newsletter', this.httpOptions);    
  }

  getNewsLetterWonder(){
    return this.http.get(this.baseUri + '/newsletter', this.httpOptions);    
  }
  


}
