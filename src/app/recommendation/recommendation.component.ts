import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css'],
})
export class RecommendationComponent implements OnInit {
  isProductListShow: boolean = false;

  recommendForm = new FormGroup({
    userId: new FormControl('1335', [
      Validators.pattern(/^\d+$/),
      Validators.required
    ])
  });
  get userId(): AbstractControl { return this.recommendForm.get('userId'); }

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(){
    
    console.log(this.recommendForm.value);
    if(this.recommendForm.valid){
      this.isProductListShow = true;
    }
  } 

  onProductListClear(isShow: boolean){
    console.log('onProductListClear');
    this.isProductListShow = isShow;
  }
}
