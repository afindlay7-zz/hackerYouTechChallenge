import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductsModel } from '../../models/products.model';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})

export class TileComponent implements OnInit {
  @Input() product:ProductsModel; 
  @Output() changeProduct = new EventEmitter<Object>();
  modal = document.getElementById('myModal'); // Get the modal
  name:string;

  constructor() { }

  ngOnInit() { }

  // When the user clicks on the button, open the modal 
  tileClick(event) {
    this.changeProduct.emit(this.product);
    console.log('name: ', this.product.name);
    this.modal = document.getElementById('myModal');
    this.modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  spanClick() {
    this.changeProduct.emit(this.product);
    console.log('span click');
    this.modal = document.getElementById('myModal');
    this.modal.style.display = "none";
  }

}
