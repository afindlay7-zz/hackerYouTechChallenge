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

  constructor(private http:Http, private lcboService:LcboService) { }

  ngOnInit() {
    // Get users geolocation using Google Maps Geolocation API (Google Maps API - Web Services)
    this.http.post('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCVYl5QhcV8QotbaBkdqaWxMzWc9DGWHMk',{"considerIp": "true"})
      .map( res => {
        res = res.json();
        this.userLat = res.location.lat;
        this.userLng = res.location.lng;
        console.log(this.userLat, this.userLng);
        return console.log('GOOGLE RESPONSE', res);
      })
      .subscribe();
    
    // Get Beaus products that meet the specifications
    this.lcboService.getProducts().subscribe( res => this.displayTiles(res));
  }

  displayTiles(res){
    console.log('PRODUCTS RESPONSE', res);
    for (let i=0; i<res.pager.total_record_count; i++){
      this.beausProducts[i] = new ProductsModel(i, res.result[i].name, res.result[i].id, res.result[i].image_url, res.result[i].description, res.result[i].primary_category, res.result[i].secondary_category, res.result[i].serving_suggestion);
    }
  }

   


}


