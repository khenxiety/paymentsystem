import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-successpage',
  templateUrl: './successpage.component.html',
  styleUrls: ['./successpage.component.scss']
})
export class SuccesspageComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {

    setTimeout(() => {
      this.route.navigate(['/payment']);
      
    }, 2000);


  }

}
