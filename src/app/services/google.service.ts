import { Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class GoogleService {
  key:string = 'https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCVYl5QhcV8QotbaBkdqaWxMzWc9DGWHMk';
  geolocationRequestBody:{} = {
    "considerIp": "true"
  };
  geolocationObeservable:Observable<string>;

  constructor(private http:Http) { }

  getGeolocation(): Observable<string>{
    this.geolocationObeservable = this.http.post(this.key,this.geolocationRequestBody)
      .map( res => res = res.json());
    return this.geolocationObeservable;
  }

  placeMarker(latitude, longitude){

  }

}
