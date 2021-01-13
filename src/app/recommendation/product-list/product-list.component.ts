import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
	@Input() userId: number;
	@Output() clearListEvent = new EventEmitter<boolean>();
	userIdView: number;
	userNotExist: boolean = false;
	suggestionId: number;
	products: Product[];

	constructor(private productService: ProductService) {
	}

	ngOnInit(): void {
		this.userIdView = this.userId;
		this.productService.getProducts(this.userIdView)
		.then(res => res
			.subscribe(
				res => {
					this.suggestionId = res.id;
					res.products.forEach(product => {
						this.productService.setProductImage(product.product.code, product);
						product.status = 1;
					})
					this.products = res.products;
				},
				err => {
					this.userNotExist = true;
				}
			)
		);
	}

	onSubmit(){
		console.log( this.userId, typeof( this.userId));
		this.productService.postProducts(this.suggestionId, this.userIdView, this.products);
		// or like this -> this.productService.postProductsMin(this.suggestionId, this.products);
		this.onClear();
	}

	onClear(){
		this.clearListEvent.emit(false);
	}
}
