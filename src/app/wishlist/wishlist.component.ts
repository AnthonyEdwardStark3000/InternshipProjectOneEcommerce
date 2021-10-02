import { Component, OnInit } from '@angular/core';
import { reduceEachLeadingCommentRange } from 'typescript';

// let btns = document.querySelector("#select");

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  function()
  {
    // btns.style.backgroundColor='red';
    console.log("selected");
  }

}
