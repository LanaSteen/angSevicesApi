import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../shared/http.service';
import { Product, Rating } from '../shared/prouct.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(private route: ActivatedRoute, private http: HttpService){
    this.route.queryParams.subscribe(params => this.getId(params))
    this.http.getProductById(this.productId).subscribe(product => this.getProductByIdFromHttp(product))

  }

  productId!:number
  getId(params:any){
   this.productId = params.id
  }
  newProduct:Product = new Product()

  getProductByIdFromHttp(data:any){

    this.newProduct = data
  }
}
