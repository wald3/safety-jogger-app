import { Component, OnInit } from '@angular/core';

import { Product } from '../shared/product';
import { ProductService } from '../shared/product.service';


@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {
  user_id: number;
  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {

    this.products = this.productService.getProductsTest()
    
    // .map(
    //   p => {
    //     return Product(){
    //       id: p.id,
    //       status: p.status
    //     };
    //   } 
    // );

  }

  onRecommendationClicked(){
    this.user_id
  }

}
