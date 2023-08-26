import { Component, OnInit } from '@angular/core';
import { SuggestedProduct } from '../models/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  suggestedProducts:SuggestedProduct[]=[
    {
      bannerimage:'Banner/Banner_Mobile.png',
      category:{
        id:0,
        category:'electronics',
        subcategory:'mobiles',
      },
    },
    {
      bannerimage:'Banner/Banner_Laptop.png',
      category:{
        id:0,
        category:'electronics',
        subcategory:'laptops',
      },
    },
    {
      bannerimage:'Banner/Banner_Chair.png',
      category:{
        id:0,
        category:'furniture',
        subcategory:'chairs',
      },
    },
  ];

  constructor(){}
  ngOnInit(): void {
      
  }

}
