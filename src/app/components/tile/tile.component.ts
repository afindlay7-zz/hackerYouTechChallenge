import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductsModel } from '../../models/products.model';
import { StoresModel } from '../../models/stores.model';
import { HttpModule, Http } from '@angular/http';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})

export class TileComponent implements OnInit {
  @Input() product:ProductsModel; 
  openModal:boolean;
  lcboStoresURL:string 
  numBeausStores:Number;
  beausStores:StoresModel[] = [];

  constructor(private http:Http) { }

  ngOnInit() { }

  // When the user clicks on the button, open the modal 
  tileClick(event:Event) {
    this.openModal = true;

    this.lcboStoresURL = 'https://lcboapi.com/stores?product_id=' + this.product.id + '&access_key=MDoxMWJlZTgzNi1mMzA3LTExZTctOTE2NS0xZmIyOTNiMGVkNDg6RjhLMWd0UEQ2SWZlRHVrbFBwVFhtNUZPQjI5RzNNSjhlWTRp';
    this.http.get(this.lcboStoresURL)
      .map( res => this.displayMap(res.json()))
      .subscribe(); 
  }

  displayMap(res){
    console.log(res);
    this.numBeausStores = res.pager.total_record_count; 
    for (let i=0; i<this.numBeausStores; i++){
      this.beausStores[i] = new StoresModel(res.result[i].address_line_1, res.result[i].address_line_2, res.result[i].id, res.result[i].latitude, res.result[i].longitude, res.result[i].name, res.result[i].telephone);
    }
  }

  // When the user clicks on <span> (x), close the modal
  spanClick() {
    this.openModal = false
  }

}
