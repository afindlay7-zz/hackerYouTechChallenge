import { Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Injectable()
export class LcboService {
  lcboProductsURL: string = 'https://lcboapi.com/products?access_key=MDoxMWJlZTgzNi1mMzA3LTExZTctOTE2NS0xZmIyOTNiMGVkNDg6RjhLMWd0UEQ2SWZlRHVrbFBwVFhtNUZPQjI5RzNNSjhlWTRp';
  searchInput: FormControl = new FormControl('');
  temp: string;
  
  constructor(private http:Http) { 
    this.http.get(this.lcboProductsURL).map( res => {
        console.log(res);
        return res.json();
      }).subscribe(); 
  }

  ngOnInit() {
    
  }

}
