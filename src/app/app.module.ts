import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { ProductComponent } from './recommendation/product-list/product/product.component';
import { ProductListComponent } from './recommendation/product-list/product-list.component';
import { ProductService } from './shared/services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    RecommendationComponent,
    ProductComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
