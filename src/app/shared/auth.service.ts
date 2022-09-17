import { Injectable } from '@angular/core';
import { SharedModule } from "src/app/shared/shared.module";
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'; 
import { Router } from "@angular/router";
import { Admin } from './admin.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  formData: Admin;
  baseUri:string = 'https://wonderdouble-backend.herokuapp.com';
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  constructor(
    private http: HttpClient,
    private router: Router
    ) { 
  }


  createAdmin(data){
    return this.http.post<Admin>(this.baseUri + '/admin/add', JSON.stringify(data), this.httpOptions);    
  }

  getByEmail(email){
    let url = `${this.baseUri}/admin/?email=${email}`;
    return this.http.get(url, this.httpOptions);    
  }

  login(data){
    return this.http.post<any>(this.baseUri + '/admin/auth', JSON.stringify(data), this.httpOptions);    
  }

  signOut() {
    localStorage.removeItem('adminInfo');
    localStorage.removeItem('adminToken');
    this.router.navigate(['admin']);
  }

  checkLogin(){
    const admin = JSON.parse(localStorage.getItem('adminInfo'));
    if (admin == null){
      this.router.navigate(['admin/login']);
    }
  }

  updateAdmin(admin){
    return this.http.post<Admin>(this.baseUri + '/admin/reset', JSON.stringify(admin), this.httpOptions);    
  }


}
