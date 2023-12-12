import {faClock, faLocationDot, faPhone, faUtensils} from '@fortawesome/free-solid-svg-icons';

import { Component } from '@angular/core';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent {
  categoryID: number = 5;
  faUtensils=faUtensils;
  faLocationDot=faLocationDot;
  faPhone=faPhone;
  faClock=faClock;
}
