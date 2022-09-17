import { Injectable } from '@angular/core';
import { Subscribers } from './subscribers.model';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubscribersService {
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

  createSubscriber(subscriber){
    return this.http.post<Subscribers>(this.baseUri + '/subscribers/add', JSON.stringify(subscriber), this.httpOptions);    
  }

  getSubscribers(){
    return this.http.get(this.baseUri + '/subscribers', this.httpOptions);    
  }

  getSubscribersById(id){
    let url = `${this.baseUri}/subscribers/?id=${id}`;
    return this.http.get(url, this.httpOptions);    
  }
 
  update(subscribers){
    return this.http.put<Subscribers>(this.baseUri + '/subscribers', JSON.stringify(subscribers), this.httpOptions);    
  }

  deleteSubscriber(id){
    return this.http.delete(this.baseUri + '/subscriber/delete/?id='+id, this.httpOptions);    
  }
}
