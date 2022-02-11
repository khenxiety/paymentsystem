import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.scss']
})
export class PaymentPageComponent implements OnInit {

  schoolname:any;
  name:any;
  sturef:any;
  amount:any;
  email:any;
  mobileno:any;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  test(){
    console.log(this.schoolname,this.name,this.sturef,this.amount,this.email,this.mobileno);


    this.route.navigate(['/success']);
    this.schoolname="";
    this.name="";
    this.sturef="";
    this.amount="";
    this.email="";
    this.mobileno="";

  }


  applyclass(){
    const header= document.getElementById('header')!;
    header.classList.toggle('open');

  }



}
