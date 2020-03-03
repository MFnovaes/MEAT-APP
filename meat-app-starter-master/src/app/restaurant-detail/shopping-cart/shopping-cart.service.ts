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

    removeItem(item: CartItem) {
        this.items.slice(this.items.indexOf(item), 1)
    }

}