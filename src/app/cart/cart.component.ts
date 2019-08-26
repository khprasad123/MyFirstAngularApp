import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';


import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.items=this.cartService.getItems();
     this.checkoutForm = this.formBuilder.group({
      name: 'Hari',
      address: 'Kottarathil'
    });
  }

  onSubmit(customerData) {
    // Process checkout data here
    window.alert('Your order has been submitted \n name : '+customerData['name']+"\n address : "+customerData['address']);
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

}