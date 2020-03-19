import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service'
import { CartItem } from './cart-item.model';
import { MenuItem } from '../menu-item/menu-item.model';
import { trigger, animate, state, style, transition, keyframes } from '@angular/animations'

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  animations: [
    trigger('row', [
      state('ready', style({opacity: 1})),
      transition('void => ready', animate('300ms 0s ease-in', keyframes([
        style({opacity: 0, transform: 'translateX(-30px)', offset: 0}),
        style({opacity: 0.8, transform: 'translateX(10px)', offset: 0.8}),
        style({opacity: 1, transform: 'translateX(0px)', offset: 1})
      ]))),
      transition('ready => void', animate('300ms 0s ease-out', keyframes([
        style({opacity: 1, transform: 'translateX(0px)', offset: 0}),
        style({opacity: 0.8, transform: 'translateX(-10px)', offset: 0.2}),
        style({opacity: 0, transform: 'translateX(30px)', offset: 1})
      ])))
    ])
  ]
})
export class ShoppingCartComponent implements OnInit {

  rowState = 'ready'

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
