import { CartItem } from "./cart-item.model"
import { MenuItem } from "../menu-item/menu-item.model"

export class ShoppingCartService {

    items: CartItem[] = []

    clear() {
        this.items = []
    }

    total(): number {
        return this.items.map(item => item.value()).reduce((prev, value) => prev+value, 0)
    }

    addItem(item: MenuItem) {
        let foundItem = this.items.find((mitem) => mitem.menuItem.id === item.id)
        console.log(foundItem)
        if(foundItem) {
            foundItem.quantity = foundItem.quantity + 1
        } else {
            this.items.push(new CartItem(item))
            console.log(this.items)
        }
    }

    increaseQty(item: CartItem) {
        item.quantity = item.quantity + 1
    }

    
    decreaseQty(item: CartItem) {
        item.quantity = item.quantity - 1
        if(item.quantity === 0) {
            this.removeItem(item)
        }
    }

    //o remove ta dando pau, conserta ai
    removeItem(item: CartItem) {
        this.items.splice(this.items.indexOf(item), 1)
    }

}