import { Injectable } from '@angular/core';
import { RepTransaction } from './rep-transaction.model';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';  

@Injectable({
  providedIn: 'root'
})
export class RepTransactionService {

  formData: RepTransaction;
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

  createTraffic(transaction){
    return this.http.post<RepTransaction>(this.baseUri + '/transaction/add', JSON.stringify(transaction), this.httpOptions);    
  }

  getTransaction(){
    return this.http.get(this.baseUri + '/transaction', this.httpOptions);    
  }

  getByUsername(username){
    let url = `${this.baseUri}/transaction/?username=${username}`;
    return this.http.get(url, this.httpOptions);    
  }

  getByProperty(property){
    let url = `${this.baseUri}/transaction/?property=${property}`;
    return this.http.get(url, this.httpOptions);    
  }

  getByStatus(status){
    let url = `${this.baseUri}/traffic/?status=${status}`;
    return this.http.get(url, this.httpOptions);    
  }

  getByDate(date){
    let url = `${this.baseUri}/transaction/?date=${date}`;
    return this.http.get(url, this.httpOptions);    
  }

  getById(id){
    let url = `${this.baseUri}/transaction/?id=${id}`;
    return this.http.get(url, this.httpOptions);    
  }

  updateTransaction(transaction){
    return this.http.put<RepTransaction>(this.baseUri + '/transaction', JSON.stringify(transaction), this.httpOptions);    
  }

  deleteProperty(id){
    return this.http.delete(this.baseUri + '/transaction/?id='+id, this.httpOptions);    
  }


}
