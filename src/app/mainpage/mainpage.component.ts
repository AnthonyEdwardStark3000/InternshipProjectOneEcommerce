import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';

import { DetailsService } from '../details.service';


import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  userdetails = [
    {
      name : "santhanamnai"
    },
    {
      name : "santhanamnai"
    }
  ]

  constructor(public router: Router,public route: ActivatedRoute,public src :DetailsService ) { }

  ngOnInit(): void {
  }

  cart()
  {
    this.src.setMessage(this.userdetails)
    this.router.navigateByUrl("/cart")
  }

}
