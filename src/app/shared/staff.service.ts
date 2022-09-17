import { Injectable } from '@angular/core';
import { Staff } from './staff.model';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  formData: Staff;

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

   
  uploadStaff(staff){
    return this.http.post<Staff>(this.baseUri + '/staff/add', JSON.stringify(staff), this.httpOptions);    
  }

  getStaff(){
    return this.http.get(this.baseUri + '/staff', this.httpOptions);    
  }

  getStaffById(id){
    let url = `${this.baseUri}/staff/?id=${id}`;
    return this.http.get(url, this.httpOptions);    
  }


}
