import { Injectable } from '@angular/core';
import { PropertyUpload } from './property-upload.model';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PropertyUploadService {

  formData: PropertyUpload;
  baseUri:string = 'https://wonderdouble-backend.herokuapp.com';
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  
  constructor(
    private http: HttpClient
  ) { }

  getUploadByPropertyId(id){
    let url = `${this.baseUri}/property-upload/?property_id=${id}`;
    return this.http.get(url, this.httpOptions);   
  }

  deleteMyProperty(id){
    return this.http.delete<PropertyUpload>(this.baseUri + '/property-upload/?id='+id, this.httpOptions);    
  }

  createUpload(upload){
    return this.http.post<any>(this.baseUri + '/property-upload/add', JSON.stringify(upload), this.httpOptions);    
  }


}
