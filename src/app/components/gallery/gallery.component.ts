import { Component, OnInit } from '@angular/core';
//import { LcboService } from '../../services/lcbo.service';
import { HttpModule, Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { ProductsModel } from '../../models/products.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {
  producer_name:string = 'q=beau\'s+all+natural+brewing';
  is_seasonal:string = '&where=is_seasonal';
  is_dead:string = '&where_not=is_dead';
  per_page:string = '&per_page=200'; //not working
  access_key:string = '&access_key=MDoxMWJlZTgzNi1mMzA3LTExZTctOTE2NS0xZmIyOTNiMGVkNDg6RjhLMWd0UEQ2SWZlRHVrbFBwVFhtNUZPQjI5RzNNSjhlWTRp';
  lcboProductsURL:string = 'https://lcboapi.com/products?' + this.producer_name + this.is_seasonal + this.is_dead + this.access_key;

  numBeausProducts:Number;
  beausProducts:ProductsModel[] = [];


  constructor(private http:Http) { }

  ngOnInit() {
    this.http.get(this.lcboProductsURL)
      .map( res => this.displayTiles(res.json()))
      .subscribe(); 
  }

  displayTiles(res){
    console.log(res);
    this.numBeausProducts = res.pager.total_record_count; 
    for (let i=0; i<this.numBeausProducts; i++){
      this.beausProducts[i] = new ProductsModel(i, res.result[i].name, res.result[i].id, res.result[i].image_url, res.result[i].description, res.result[i].primary_category, res.result[i].secondary_category, res.result[i].serving_suggestion);
    }
  }

   


}


