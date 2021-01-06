import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/shared/product';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() userId: number;
  @Output() clearListEvent = new EventEmitter<boolean>();
  products: Product[];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getProducts(this.userId)
    .subscribe(
      res => {
        try {
          this.products = res.suggestion.recommendations;
        } catch (err) {
          console.error(`No user object with userId: ${this.userId}`);
        }
        
      },
      err => console.error('Error:', err), 
      () => console.log('this.products', this.products)
    );
  }

  onSubmit(){
    console.log('subimt Test');
  }

  onClear(){
    console.log('onClear');
    this.clearListEvent.emit(false);
  }

}
