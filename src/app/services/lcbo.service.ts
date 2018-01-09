import { Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class LcboService {
  productsBaseURL:string = 'https://lcboapi.com/products?';
  storesBaseURL:string = 'https://lcboapi.com/stores?';
  producer_name:string = 'q=beau\'s+all+natural+brewing';
  is_seasonal:string = '&where=is_seasonal';
  is_dead:string = '&where_not=is_dead';
  access_key:string = '&access_key=MDoxMWJlZTgzNi1mMzA3LTExZTctOTE2NS0xZmIyOTNiMGVkNDg6RjhLMWd0UEQ2SWZlRHVrbFBwVFhtNUZPQjI5RzNNSjhlWTRp';
  
  lcboProductsURL:string =  this.productsBaseURL + this.producer_name + this.is_seasonal + this.is_dead + this.access_key;
  lcboStoresURL:string;

  productsObservable:Observable<any>;
  storesObservable:Observable<any>;

  constructor(private http:Http) { }

  getProducts(): Observable<any>{
    this.productsObservable = this.http.get(this.lcboProductsURL)
      .map( res => res.json()); 
    return this.productsObservable;
  }

  getStores(productID:string): Observable<any> {
    this.lcboStoresURL =  this.storesBaseURL + 'product_id=' + productID + this.access_key;
    this.storesObservable = this.http.get(this.lcboStoresURL)
      .map( res => res.json());
    return this.storesObservable;
  }
}
