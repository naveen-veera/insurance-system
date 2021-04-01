import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InsurancequoteService {

  bp:number = 1000;
  age:number;
  behaviour:string;
  livingArea:string;
  living:string;
  diabetic:string;
  addGst: any;
  totalIQA: any;

  constructor() { }

  generate(postData) {
    var basic_price = 1000;
    var amount = 0;
    var totalAmount = 0;
    var gst = 0;
    var c_age = postData.customerAge;
    var c_behaviour = postData.behaviour;
    var c_livingArea = postData.livingArea;
    var c_living = postData.living;
    var c_diabetic = postData.diabetic;

    if(c_age > 30 && c_age <= 40) {
      amount = basic_price * 0.1;
    }
    else if(c_age > 40 && c_age <= 55) {
      amount = basic_price * 0.2;
    }
    else if(c_age > 55) {
      amount = basic_price * 0.45;
    }

    totalAmount = basic_price + amount;

    if(c_behaviour === "Smoking & Drinks") {
      amount = totalAmount * 0.25;
    }

    totalAmount = totalAmount + amount;

    if(c_livingArea === "urban") {
      amount = totalAmount * 0.05;
    }
    else if(c_livingArea === "rural") {
      amount = totalAmount * 0.1;
    }

    totalAmount = totalAmount + amount;

    if(c_living==="yes") {
      amount = totalAmount * 0.1;
    }

    totalAmount = totalAmount + amount;

    if(c_diabetic==="yes") {
      amount = totalAmount * 0.2;
    }

    totalAmount = totalAmount + amount;

    gst = totalAmount * 0.18;

    totalAmount = totalAmount + gst;

    console.log(totalAmount);
    this.totalIQA = totalAmount;

    return this.totalIQA;
    
    // console.log("Service working Successfully");
    // console.log(postData);
  }

}
