import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { ProductsModel } from '../../models/products.model';
import { StoresModel } from '../../models/stores.model';
import { LcboService } from '../../services/lcbo.service';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})

export class TileComponent implements OnInit {
  @Input() product:ProductsModel; 
  @Input() latitude:Number;
  @Input() longitude:Number;
  openModal:boolean;
  beausStores:StoresModel[] = [];

  constructor(private http:Http, private lcboService:LcboService) { }

  ngOnInit() { }

  // When the user clicks on the button, open the modal 
  tileClick(event:Event) {
    this.openModal = true;
    // Get Lcbo stores that carry the selected Beau's product
    this.lcboService.getStores(this.product.id).subscribe( res => this.displayMap(res));
  }

  displayMap(res){
    console.log('STORES RESPONSE', res);
    for (let i=0; i<res.pager.total_record_count; i++){
      this.beausStores[i] = new StoresModel(res.result[i].address_line_1, res.result[i].address_line_2, res.result[i].id, res.result[i].latitude, res.result[i].longitude, res.result[i].name, res.result[i].telephone);
    }
  }

  // When the user clicks on <span> (x), close the modal
  spanClick() {
    this.openModal = false
  }

}
