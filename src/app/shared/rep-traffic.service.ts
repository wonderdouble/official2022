import { Injectable } from '@angular/core';
import { RepTraffic } from './rep-traffic.model';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'; 
//import { Timestamp } from 'rxjs/internal/operators/timestamp';

@Injectable({
  providedIn: 'root'
})
export class RepTrafficService {

  formData: RepTraffic;
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

  createTraffic(traffic){
    return this.http.post<RepTraffic>(this.baseUri + '/traffic/add', JSON.stringify(traffic), this.httpOptions);    
  }

  getTraffic(){
    return this.http.get(this.baseUri + '/traffic', this.httpOptions);    
  }

  getByUsername(username){
    let url = `${this.baseUri}/traffic/?username=${username}`;
    return this.http.get(url, this.httpOptions);    
  }

  getByProperty(property){
    let url = `${this.baseUri}/traffic/?property=${property}`;
    return this.http.get(url, this.httpOptions);    
  }

  getByDate(date){
    let url = `${this.baseUri}/traffic/?datey=${date}`;
    return this.http.get(url, this.httpOptions);    
  }

  getById(id){
    let url = `${this.baseUri}/traffic/?id=${id}`;
    return this.http.get(url, this.httpOptions);    
  }

  updateTraffic(traffic){
    return this.http.put<RepTraffic>(this.baseUri + '/traffic', JSON.stringify(traffic), this.httpOptions);    
  }

  deleteProperty(id){
    return this.http.delete(this.baseUri + '/traffic/?id='+id, this.httpOptions);    
  }

}
