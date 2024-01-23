import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { products } from './models/product.model';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

const baseURL = "http://localhost:3000/products"

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private http:HttpClient) { }

  create(data:any):Observable<any>{
    return this.http.post(baseURL,data)
  }

  getAll():Observable<products[]>{
    return this.http.get<products[]>(baseURL)
  }

  get(id:any):Observable<products>{
    return this.http.get<products>(`${baseURL}/${id}`)
  }

  update(id:any,data:any):Observable<any>{
    return this.http.put(`${baseURL}/${id}`,data)
  }

  delete(id:any):Observable<any>{
    return this.http.delete(`${baseURL}/${id}`)
  }

}
