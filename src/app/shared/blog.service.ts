import { Injectable } from '@angular/core';
import { Blog } from './blog.model';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  formData: Blog;
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

  uploadBlog(blog){
    return this.http.post<Blog>(this.baseUri + '/blog/add', JSON.stringify(blog), this.httpOptions);    
  }

  getBlog(){
    return this.http.get(this.baseUri + '/blog', this.httpOptions);    
  }
 
  getBlogMin(num){
    let url = `${this.baseUri}/blog/?min=${num}`;
    return this.http.get(url, this.httpOptions);    
  }

  getBlogById(blog_id){
    let url = `${this.baseUri}/blog/?id=${blog_id}`;
    return this.http.get(url, this.httpOptions);    
  }

  updateBlog(blog){
    return this.http.put<Blog>(this.baseUri + '/blog', JSON.stringify(blog), this.httpOptions);    
  }

  deleteBlog(id){
    return this.http.delete<Blog>(this.baseUri + '/blog/?id='+id, this.httpOptions);    
  }


}
