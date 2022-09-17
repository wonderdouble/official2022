import { Injectable } from '@angular/core';
import { Archive } from './archive.model';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArchiveService {
  formData: Archive;
  //private _jsonURL = '/assets/subscribers.json';

  //baseUri:string = 'https://api.wonderdoubleglobal.com';
  baseUri:string = 'https://wonderdouble-backend.herokuapp.com';

  //baseUri:string = 'https://pragmatic-backend.herokuapp.com';
  //headers = new HttpHeaders().set('Content-Type', 'application/json');
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  constructor(
    private http: HttpClient
  ) {
    /*this.getJSON().subscribe(data => {
      console.log(data);
    });*/
  }

  createArchive(archive){
    return this.http.post<Archive>(this.baseUri + '/archive/add', JSON.stringify(archive), this.httpOptions);    
  }

  getArchive(){
    return this.http.get(this.baseUri + '/archive', this.httpOptions);    
  }

  getDetailsById(archive_id){
    let url = `${this.baseUri}/archive/?id=${archive_id}`;
    return this.http.get(url, this.httpOptions);    
  }

  deleteArchive(id){
    return this.http.delete<Archive>(this.baseUri + '/archive/?id='+id, this.httpOptions);    
  }

  updateArchive(archive){
    return this.http.put<Archive>(this.baseUri + '/archive', JSON.stringify(archive), this.httpOptions);    
  }

}
