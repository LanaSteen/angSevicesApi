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
  mainTitle:string = 'All Products'
  product : Product = new Product();
  productList : Product[] = [];
  getProducts(data:any){
  this.productList = data;
  }
  fillteredProductList:Product[] =[]
  seletctedCaterogy!:string
  filtered:boolean = false
  getSelectetdCategory(value:string){
     console.log("parent  იდან " +value)
    this.seletctedCaterogy = value
    if(this.seletctedCaterogy !="---"){
      this.fillteredProductList = this.productList.filter(el => el.category==this.seletctedCaterogy)
      this.filtered = true
    }
    else{
      this.filtered = false
    }
  }
}
