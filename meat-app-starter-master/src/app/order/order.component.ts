import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option';
import { OrderService } from './order.service';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { Order, OrderItem } from './order.model';
import { Router } from '@angular/router';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  delivery: number = 8

  paymentOptions: RadioOption[] = [
    {label: "Dinheiro", value: "MON"},
    {label: "Cartão de Débito", value: "DEB"},
    {label: "Cartão Refeição", value: "REF"}
  ]

  constructor(private ordeService: OrderService, private router: Router) { }

  ngOnInit() {
  }

  itemsValue() {
    return this.ordeService.itemsValue()
  }

  cartItems(): CartItem[] {
    return this.ordeService.cartItems()
  }

  increaseQty(item: CartItem) {
    this.ordeService.increaseQty(item)
  }

  decreaseQty(item: CartItem) {
    this.ordeService.decreaseQty(item)
  }

  remove(item: CartItem) {
    this.ordeService.remove(item)
  }

  checkOrder(order: Order) {
    order.orderItems = this.cartItems().map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.id))
    this.ordeService.checkOrder(order).subscribe((orderId: string) => {
      this.router.navigate(['/order-sumary'])
      console.log(orderId) 
      this.ordeService.clear()
    })
    console.log(order)
  }
}
