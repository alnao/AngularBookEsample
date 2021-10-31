import { Injectable } from '@angular/core';
import { Book } from '../componets/book/book.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  //urlApi : string="http://akane/php/bookServer/api.php";
  urlApi : string="http://localhost:3000/books";
  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]>{
    return this.http.get<Book[]>(this.urlApi)
  }
  delete(id : number): Observable<Book>{
    return this.http.delete<Book>(`${this.urlApi}?id=${id}`)
  }
  insert(form : NgForm): Observable<Book>{
    return this.http.post<Book>(this.urlApi,form.value)//con post si fa così
  }
  update(form : NgForm,id : number): Observable<Book>{
    return this.http.put<Book>(`${this.urlApi}?id=${id}`,form.value)//con post si fa così
  }
  getId(id : string): Observable<Book>{
    return this.http.get<Book>(`${this.urlApi}?id=${id}`);
  }

}
