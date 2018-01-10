import { Component, OnInit, Input } from '@angular/core';
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
  @Input() userLat:Number;
  @Input() userLng:Number;
  beausStores:StoresModel[] = [];
  googleAPIKey:string = 'key=AIzaSyCVYl5QhcV8QotbaBkdqaWxMzWc9DGWHMk';
  readyToDisplay:boolean = false;
  openModal:boolean;
  

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
    for (let i=0; i<res.result.length; i++){
      this.beausStores.push({
        address_line_1: res.result[i].address_line_1,
        address_line_2: res.result[i].address_line_2,
        city: res.result[i].city,
        id: res.result[i].id,
        latitude: res.result[i].latitude,
        longitude: res.result[i].longitude,
        name: res.result[i].name,
        telephone: res.result[i].telephone
      });
    }
    this.readyToDisplay = true;
  }
  
  // When the user clicks on <span> (x), close the modal
  spanClick() {
    this.openModal = false
    this.readyToDisplay = false;
  }
}
