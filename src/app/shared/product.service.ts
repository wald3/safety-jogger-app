import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Product } from '../shared/product';

@Injectable({
  providedIn: 'root',
 })
export class ProductService {

  private url = 'http://80.249.81.144:9014/api';

  constructor(private http: HttpClient) {}

  getProductsTest(): any {
    let prod: Product[] = []
  }
  

  getProducts(user_id: number, top_k: number = 3): Observable<any> {
    const params = new HttpParams({
      fromObject: {
        user_id: user_id.toString(),
        top_k: top_k.toString(),
      }
    });
    return this.http.get(this.url + '/recommended_products', { params: params })
      .pipe(
        catchError(this.handleError)
      );
  }

  postProducts(body: any): Observable<any> {
    return this.http.post(this.url + '/suggestion_status', body)
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
