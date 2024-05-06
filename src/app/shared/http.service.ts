import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http : HttpClient) { }



  getProducts(){
   return this.http.get('https://fakestoreapi.com/products')
  }

  getProductById(id:number){
    return this.http.get('https://fakestoreapi.com/products/'+id)
  }

}
