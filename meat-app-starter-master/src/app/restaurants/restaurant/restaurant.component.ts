import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { RestaurantService } from '../restaurants.service';

@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  @Input() restaurant: Restaurant

  constructor() { }

  ngOnInit() {
  }

}
