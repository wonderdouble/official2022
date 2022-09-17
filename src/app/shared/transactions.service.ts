import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'; 
import { Transactions } from './transactions.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  formData: Transactions;
  baseUri:string = 'https://wonderdouble-backend.herokuapp.com';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  
  constructor(
    private http: HttpClient) { }

    createTransaction(data){
      return this.http.post<Transactions>(this.baseUri + '/transaction/add', JSON.stringify(data), this.httpOptions);    
    }

    getTransactions(){
      return this.http.get(this.baseUri + '/transaction', this.httpOptions);    
    }
  
    getTransactionsById(id){
      let url = `${this.baseUri}/transaction/find/?id=${id}`;
      return this.http.get(url, this.httpOptions);    
    }

    getTransactionsByCustomerId(id){
      let url = `${this.baseUri}/transaction/find/?customer_id=${id}`;
      return this.http.get(url, this.httpOptions);    
    }

    getTransactionsByEmail(email){
      let url = `${this.baseUri}/transaction/find/?email=${email}`;
      return this.http.get(url, this.httpOptions);    
    }

    updateTransactions(transaction){
      return this.http.put<Transactions>(this.baseUri + '/transaction', JSON.stringify(transaction), this.httpOptions);    
    }
    
}
