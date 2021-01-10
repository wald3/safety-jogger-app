import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';

import { Product } from '../shared/product';

@Injectable({
  providedIn: 'root',
 })
export class ProductService {

  private urlTest = 'https://86bc632b3544.ngrok.io';
  private url     = 'http://80.249.81.144:9014/api';

  constructor(private http: HttpClient) {}

  getTestData(user_id: string): Observable<any>{
    let products = {
		"1335" : {
			"suggestion": {
			"id": 103,
			"recommendations": [
				{
					"id": 352,
					"product": {
						"code": "VISITORI",
						"id": 311420
					},
					"score": 1.0844475249236383,
					"status": null
				},
				{
					"id": 353,
					"product": {
						"code": "PREMIUM",
						"id": 215878
					},
					"score": -0.01610363228085214,
					"status": null
				},
				{
					"id": 354,
					"product": {
						"code": "LABOR",
						"id": 279077
					},
					"score": -0.11957405718097602,
					"status": null
				}
			],
			"user_id": 1335
		}
		},
		"215987": {
			"suggestion": {
				"id": 105,
				"recommendations": [
					{
						"id": 358,
						"product": {
							"code": "PREMIUM",
							"id": 215878
						},
						"score": 1.4219202042083179,
						"status": null
					},
					{
						"id": 359,
						"product": {
							"code": "VISITORI",
							"id": 311420
						},
						"score": 1.24532350438343,
						"status": null
					},
					{
						"id": 360,
						"product": {
							"code": "RENA",
							"id": 266847
						},
						"score": -0.040806156677024946,
						"status": null
					}
				],
				"user_id": 215987
			}
		},
		"1713": {
			"suggestion": {
				"id": 106,
				"recommendations": [
					{
						"id": 361,
						"product": {
							"code": "PROMONORDI",
							"id": 228601
						},
						"score": 2.4498358026341824,
						"status": null
					},
					{
						"id": 362,
						"product": {
							"code": "BOREAS2",
							"id": 215788
						},
						"score": 2.307561140784844,
						"status": null
					},
					{
						"id": 363,
						"product": {
							"code": "C410",
							"id": 271286
						},
						"score": 1.9069347025901382,
						"status": null
					}
				],
				"user_id": 1713
			}
		}
	}
	
    return new Observable((observer)=>{
		observer.next(products[user_id]);
	});
  }

  getProducts(user_id: number, top_k: number=3):  Observable<any> {
    const params = {
        user_id: user_id.toString(),
        top_k: top_k.toString(),
    };
    console.log('user_id', user_id, '| top_k', top_k);
    return this.http.get( `${this.urlTest}/recommended_products/${user_id}`)
    // return this.http.get( `${this.url}/recommended_products`, { params: params })
      .pipe(
        catchError(this.handleError)
      );
  }

  postProducts(body: any): Observable<any> {
    return this.http.post(`${this.url}/suggestion_status`, body)
      .pipe(
        catchError(this.handleError)
      );
  }

  postProductsMin(body: any): Observable<any> {
    return this.http.post(this.url + '/suggestion_status', body)
      .pipe(
        catchError(this.handleError)
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
