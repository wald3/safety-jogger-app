import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NumberValueAccessor, Validators } from '@angular/forms';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css'],
})
export class RecommendationComponent implements OnInit {
  isProductListShow: boolean = false;

  recommendForm = new FormGroup({
    userId: new FormControl('', [
      Validators.pattern(/^\d+$/),
      Validators.required
    ])
  });
  get getuserId(): string {
      return this.recommendForm.get('userId').value;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

 formSubmit(){
   if(this.recommendForm.invalid){
     
   }
    console.log(this.recommendForm.value);
  }

  // clear() { this.isProductListShow = false; }

 

  // onRecomendationClick() {
  //   this.isProductListShow = true;
  // }


  // viewErrors(){
  //   this.isError = true;
  //   setTimeout(()=>{
  //     this.isError = false;
  //   }, 1000)
  // }
}
