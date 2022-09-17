import { Injectable } from '@angular/core';
import { SharedModule } from "src/app/shared/shared.module";
import { Property } from './property.model';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  formData: Property;

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

  createProperty(data){
    return this.http.post<any>(this.baseUri + '/property/add', JSON.stringify(data), this.httpOptions);    
  }


  getProperty(){
    return this.http.get(this.baseUri + '/property', this.httpOptions);    
  }

  getTopProperty(){
    return this.http.get(this.baseUri + '/property/top', this.httpOptions);    
  }

  getPropertyMin(num){
    let url = `${this.baseUri}/property/?min=${num}`;
    return this.http.get(url, this.httpOptions);    
  }

  getPropertyById(id){
    let url = `${this.baseUri}/property/?id=${id}`;
    return this.http.get(url, this.httpOptions);    
  }

  updateProperty(data){
    return this.http.put<Property>(this.baseUri + '/property', JSON.stringify(data), this.httpOptions);    
  }

  deleteProperty(id: any){
    return this.http.delete<Property>(this.baseUri + '/property/?id='+id, this.httpOptions);    
  }

 
}
