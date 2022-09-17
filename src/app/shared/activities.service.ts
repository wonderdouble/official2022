import { Injectable } from '@angular/core';
import { Activities } from './activities.model';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  formData: Activities;
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

  uploadActivities(activities){
    return this.http.post<Activities>(this.baseUri + '/activities/add', JSON.stringify(activities), this.httpOptions);    
  }

  getActivities(){
    return this.http.get(this.baseUri + '/activities', this.httpOptions);    
  }

  getActivitiesMin(num){
    let url = `${this.baseUri}/activities/?min=${num}`;
    return this.http.get(url, this.httpOptions);    
  }

  getDetailsById(activities_id){
    let url = `${this.baseUri}/activities/?id=${activities_id}`;
    return this.http.get(url, this.httpOptions);    
  }

  updateActivities(activities){
    return this.http.put<Activities>(this.baseUri + '/activities', JSON.stringify(activities), this.httpOptions);    
  }

  deleteActivities(id){
    return this.http.delete<Activities>(this.baseUri + '/activities/?id='+id, this.httpOptions);    
  }


}
