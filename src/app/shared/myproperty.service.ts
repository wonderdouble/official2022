import { Injectable } from '@angular/core';
import { Myproperty } from './myproperty.model';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MypropertyService {

  formData: Myproperty;
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

  uploadMyProperty(data){
    return this.http.post<any>(this.baseUri + '/myproperty/add', JSON.stringify(data), this.httpOptions);    
  }

  getMyProperty(){
    return this.http.get(this.baseUri + '/myproperty', this.httpOptions);    
  }

  getMyPropertyMin(num){
    let url = `${this.baseUri}/myproperty/?min=${num}`;
    return this.http.get(url, this.httpOptions);    
  }

  getDetailsById(myprop_id){
    let url = `${this.baseUri}/myproperty/?id=${myprop_id}`;
    return this.http.get(url, this.httpOptions);    
  }

  updateMyProperty(myProperty){
    return this.http.put<Myproperty>(this.baseUri + '/myproperty', JSON.stringify(myProperty), this.httpOptions);    
  }

  deleteMyProperty(id){
    return this.http.delete<Myproperty>(this.baseUri + '/myproperty/?id='+id, this.httpOptions);    
  }
}
