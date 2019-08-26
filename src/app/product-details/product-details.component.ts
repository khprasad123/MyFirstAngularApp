import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
  constructor(private route:ActivatedRoute,) {
    
   }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
    this.product=products[0];
    for (let entry of products) {
        if(entry.id==+params.get('productId')){
            this.product=entry;
            break;
        }

    }
    });
  }

}