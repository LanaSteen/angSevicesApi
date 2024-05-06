import { Component } from '@angular/core';
import { Product } from '../shared/prouct.model';
import { HttpService } from '../shared/http.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

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

     classShow="textOver"
     index!:number
     show(ind:number){
      this.index = ind;
      if(this.classShow == "textOver"){
       this.classShow = "textOverAutoHeight"
      }else{
        this.classShow="textOver"
      }
     }
}
