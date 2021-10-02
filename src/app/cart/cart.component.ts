import { Component, Input, OnInit } from '@angular/core';


import { DetailsService } from '../details.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  userdetails = {};
  @Input()data:string | undefined;

  constructor(public src :DetailsService ) {

      this.userdetails = this.src.getMessage();

        console.log(this.userdetails);
  }


  ngOnInit(): void {
  }

  clicked()
  {
    console.log("clicked the bottom");
  }

}
