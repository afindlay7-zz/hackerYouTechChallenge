import { Component, OnInit } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { ProductsModel } from '../../models/products.model';
import { LcboService } from '../../services/lcbo.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {
  beausProducts:ProductsModel[] = [];
  userLat:Number;
  userLng:Number;
  geolocationPosition;

  constructor(private http:Http, private lcboService:LcboService) { }

  ngOnInit() {
    // Get users geolocation
    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
          position => {
              console.log('GEOLOCATION', position),
              this.userLat = position.coords.latitude,
              this.userLng = position.coords.longitude
          },
          error => {
              switch (error.code) {
                  case 1:
                      console.log('Permission Denied');
                      break;
                  case 2:
                      console.log('Position Unavailable');
                      break;
                  case 3:
                      console.log('Timeout');
                      break;
              }
          }
      );
    };

    // Get Beaus products that meet the specifications
    this.lcboService.getProducts().subscribe( res => this.displayTiles(res));
  }

  displayTiles(res){
    console.log('PRODUCTS RESPONSE', res);
    for (let i=0; i<res.result.length; i++){
      this.beausProducts[i] = new ProductsModel(res.result[i].name, res.result[i].id, res.result[i].image_url, res.result[i].description, res.result[i].primary_category, res.result[i].secondary_category, res.result[i].serving_suggestion, res.result[i].origin, res.result[i].style);
    }
  }
}