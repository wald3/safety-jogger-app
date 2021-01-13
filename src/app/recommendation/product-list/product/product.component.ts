import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Product } from 'src/app/shared/models/product';


@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
	@Input() product: Product;
	
	constructor() { }

	ngOnInit(): void {
	}

	changed(event){
		let check = event.target.checked;
		this.product.status = check ? 1 : 0;
	}
}
