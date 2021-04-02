import { Component } from '@angular/core';
import { InsurancequoteService } from './insurancequote.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  customerAge:any;
  behaviour:any;
  livingArea : any;
  living : any;
  diabetic : any;

  totalAmount : any;
  amount : number;

  constructor(private insurancequoteService:InsurancequoteService) {

  }

  onSubmit(postData) {
    
    this.amount = this.insurancequoteService.generate(postData);
    this.totalAmount = "The Insurance Quotation is " + this.amount;
    
  }

}
