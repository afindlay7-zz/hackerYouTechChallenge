import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductsModel } from '../../models/products.model';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})

export class TileComponent implements OnInit {
  @Input() product:ProductsModel; 
  openModal:boolean;

  constructor() { }

  ngOnInit() { }

  // When the user clicks on the button, open the modal 
  tileClick(event:Event) {
    this.openModal = true;
  }

  // When the user clicks on <span> (x), close the modal
  spanClick() {
    this.openModal = false
  }

}
