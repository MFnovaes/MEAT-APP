import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service'
import { CartItem } from './cart-item.model';
import { MenuItem } from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCart: ShoppingCartService) { }

  ngOnInit() {
  }

  items(): CartItem[] {
    return this.shoppingCart.items
  }

  total(): number {
    return this.shoppingCart.total()
  }

  clear() {
    this.shoppingCart.clear()
  }

  removeItem(item: CartItem) {
    this.shoppingCart.removeItem(item)
  }

  addItem(item: MenuItem) {
    console.log(item)
    this.shoppingCart.addItem(item)
  }

}
