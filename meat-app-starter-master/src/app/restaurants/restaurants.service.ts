import { Restaurant } from "./restaurant/restaurant.model";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { MEAT_API } from "app/app.api";
import { Observable } from "rxjs/Observable";
import { ErrorHandler } from '../app.error-handler'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { MenuItem } from "app/restaurant-detail/menu-item/menu-item.model";

@Injectable()
export class RestaurantService {
    
    constructor(private http: Http) {}

    restaurants(search?: string): Observable<Restaurant[]> {
        return this.http.get(`${MEAT_API}/restaurants`, {params: {q: search}})
          .map(response => response.json())
          .catch(e => ErrorHandler.handleError(e))
    }
    
    retaurantById(id: string): Observable<Restaurant> {
        return this.http.get(`${MEAT_API}/restaurants/${id}`)
            .map(response => response.json())
            .catch(e => ErrorHandler.handleError(e))
    }

    reviewsOfRestaurants(id: string): Observable<any> {
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
            .map(response => response.json())
            .catch(e => ErrorHandler.handleError(e)) 
    }

    menuOfRestaurants(id: string): Observable<MenuItem[]> {
        return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
            .map(response => response.json())
            .catch(e => ErrorHandler.handleError(e)) 
    }

}