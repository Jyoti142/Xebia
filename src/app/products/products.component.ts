import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
productList:any;
showProductNotFound:boolean;
products:any
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProductList()
  }



  getProductList(){
   this.productService.getProductListing().subscribe(
     data=> {
       console.log(data, 'data')
       this.products = data;
     }
   )
 
  }

}
