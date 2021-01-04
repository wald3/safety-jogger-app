import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product;
  
  constructor() { }

  ngOnInit(): void {
  }

  changed(event){
    let check = event.target.checked;
    alert(event.target.checked);
  }
}
