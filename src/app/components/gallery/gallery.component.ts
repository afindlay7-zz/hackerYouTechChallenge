import { Component, OnInit } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { ProductsModel } from '../../models/products.model';
import { LcboService } from '../../services/lcbo.service';
import { GoogleService } from '../../services/google.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {
  beausProducts:ProductsModel[] = [];
  userLat:Number;
  userLng:Number;

  constructor(private http:Http, private lcboService:LcboService, private googleService:GoogleService) { }

  ngOnInit() {
    // Get users geolocation using Google Maps Geolocation API (Google Maps API - Web Services)
    this.googleService.getGeolocation().subscribe( res => this.setGeolocation(res));
    
    // Get Beaus products that meet the specifications
    this.lcboService.getProducts().subscribe( res => this.displayTiles(res));
  }

  setGeolocation(res){
    console.log('GOOGLE RESPONSE', res);
    this.userLat = res.location.lat;
    this.userLng = res.location.lng
  }

  displayTiles(res){
    console.log('PRODUCTS RESPONSE', res);
    for (let i=0; i<res.result.length; i++){
      this.beausProducts[i] = new ProductsModel(res.result[i].name, res.result[i].id, res.result[i].image_url, res.result[i].description, res.result[i].primary_category, res.result[i].secondary_category, res.result[i].serving_suggestion);
    }
  }
}