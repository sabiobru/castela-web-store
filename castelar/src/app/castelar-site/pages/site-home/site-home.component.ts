import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-home',
  templateUrl: './site-home.component.html',
  styleUrls: ['./site-home.component.scss']
})
export class SiteHomeComponent implements OnInit {
  itemsPerSlide = 3;
  slides = [
    { name: 'slide 1', path: './../../../../assets/images/slide_1.jpg' },
    { name: 'slide 2', path: './../../../../assets/images/slide_2.jpg' },
    { name: 'slide 3', path: './../../../../assets/images/slide_3.jpg' }
  ];


  slidesProducts = [
    { name: 'Produto 1', path: './../../../../assets/images/product_1.png' },
    { name: 'Produto 2', path: './../../../../assets/images/product_1.png' },
    { name: 'Produto 2', path: './../../../../assets/images/product_1.png' },
    { name: 'Produto 3', path: './../../../../assets/images/product_1.png' },
    { name: 'Produto 4', path: './../../../../assets/images/product_1.png' },
    { name: 'Produto 5', path: './../../../../assets/images/product_1.png' },
    { name: 'Produto 6', path: './../../../../assets/images/product_1.png' },
    { name: 'Produto 7', path: './../../../../assets/images/product_1.png' },
    { name: 'Produto 8', path: './../../../../assets/images/product_1.png' },
    { name: 'Produto 9', path: './../../../../assets/images/product_1.png' },
  ];

  constructor() { }





  ngOnInit(): void {
  }

}
