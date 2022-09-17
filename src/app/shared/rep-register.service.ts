import { Injectable } from '@angular/core';
import { RepRegister } from './rep-register.model';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepRegisterService {
  formData: RepRegister;
  
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

 
  createMember(member){
    return this.http.post<RepRegister>(this.baseUri + '/agent/add', JSON.stringify(member), this.httpOptions);    
  }
 
  getMember(){
    return this.http.get(this.baseUri + '/agent', this.httpOptions);    
  }


  getMemberById(id){
    let url = `${this.baseUri}/agent/?id=${id}`;
    return this.http.get(url, this.httpOptions);    
  }

  getMemberByUsername(username){
    let url = `${this.baseUri}/agent/?username=${username}`;
    return this.http.get(url, this.httpOptions);    
  }

  update(member){
    return this.http.put<RepRegister>(this.baseUri + '/agent', JSON.stringify(member), this.httpOptions);    
  }
 

  deleteMember(id){
    return this.http.delete(this.baseUri + '/agent/delete/?id='+id, this.httpOptions);    
  }

  login(data){
    return this.http.post(this.baseUri + '/agent/auth', JSON.stringify(data), this.httpOptions);    
  }

  reset(data){
    return this.http.post(this.baseUri + '/agent/reset', JSON.stringify(data), this.httpOptions);    
  }

 

  signOut() {
    localStorage.removeItem('agentInfo');
    localStorage.removeItem('agentToken');
    this.router.navigate(['agent']);
  }

  checkLogin(){
    const agent = JSON.parse(localStorage.getItem('agentInfo'));
    if (agent == null){
      this.router.navigate(['agent/login']);
    }
  }

  updateAdmin(admin){
    return this.http.post<RepRegister>(this.baseUri + '/agent/reset', JSON.stringify(admin), this.httpOptions);    
  }
 
}
