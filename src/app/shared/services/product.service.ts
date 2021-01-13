import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap} from 'rxjs/operators';
import { JoggerScrapper } from '../helpers/scrapper';

import { Product } from '../models/product';
import { Suggestion } from '../models/suggestion';

@Injectable({
  providedIn: 'root',
 })
export class ProductService {
	private url = 'http://80.249.81.144:9014/api';

	constructor(private http: HttpClient) {}

	async getProducts(user_id: number, top_k: number=3):  Promise<Observable<Suggestion>> {
		const params = {
			user_id: user_id.toString(),
			top_k: top_k.toString(),
		};

		return await this.http.get( `${this.url}/recommended_products`, { params: params })
		.pipe( 
			map((json: any) => ({ 
				id: json?.suggestion?.id,
				products: json?.suggestion?.recommendations 
			}) as any),
			catchError(this.handleError)
		);
	}

	postProducts(suggestionId: number, userId: number, products: Product[]): void {
		let body = {
			"id": suggestionId,
			"recommended_products": products.map(p => ({
				"id": p.id,
				"product": {
					"code": p.product.code,
					"id": p.product.id
				},
				"score": p.score,
				"status": p.status
			})),
			"user_id": Number(userId)
		};

		console.log(body);
		this.http.post(`${this.url}/suggestion_status`, body)
			.pipe(
				tap(console.log),
				catchError(this.handleError)
		);
	}

	postProductsMin(suggestionId: number, products:  Product[]): void {
		let body = {
			"id": suggestionId,
			"recommended_products": products.map(p => ({
				"id": p.id,
				"status": p.status
			})) 
		};
		console.log(body);
		this.http.post(`${this.url}/suggestion_status`, body)
			.pipe(
				tap(console.log),
				catchError(this.handleError)
		);
	}

	async setProductImage(productCode: string, product: Product) {
		let scrapper = new JoggerScrapper(productCode.toLowerCase(), this.http);
		await scrapper.getLink().then(
			(res: string) => {
				product.image_link = res;
			},
			err => console.log('Error while page scrapping', err)
		);
	}

	private handleError(error: HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
		// Client Error
		console.error('An error occurred:', error.error.message);
		} else {
		// Back-End Error
		console.error(
			`Backend returned code ${error.status}, ` +
			`body was: ${error.error}`);
		}
		// Observable Error
		return throwError(
			'Something bad happened; please try again later.');
	}
}
