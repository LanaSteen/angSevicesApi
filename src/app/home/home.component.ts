import { Component } from '@angular/core';
import { Product } from '../shared/prouct.model';
import { HttpService } from '../shared/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private httpService:HttpService){
 //    this.httpService.getProducts().subscribe(products => console.log(products))
    this.httpService.getProducts().subscribe(products => this.getProducts(products))


}



  product : Product = new Product();
  productList : Product[] = [
    //{ title:"title", description:"somedes", price:50,  category: "someCat", image:"dsdssd", rating : {rate:13.5, count:120} }
  ];


  getProducts(data:any){
  this.productList = data;
  }

}
