import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service'

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCart: ShoppingCartService) { }

  ngOnInit() {
  }

  items(): any[] {
    return this.shoppingCart.items
  }

  total(): number {
    return this.shoppingCart.total()
  }

}
