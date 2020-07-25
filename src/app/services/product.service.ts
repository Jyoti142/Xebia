import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(
    private http: HttpClient,
  ) { }


  getProductListing(){
    let url = "https://xebiascart.herokuapp.com/products";
    return this.http.get(url);
  }

  getProductFilters(){    
    let url = "https://xebiascart.herokuapp.com/filters";
    return this.http.get(url);
  }

  getSearchItem(item){
    let url = "https://xebiascart.herokuapp.com/products?title="+item;
    return this.http.get(url);
  }

}
