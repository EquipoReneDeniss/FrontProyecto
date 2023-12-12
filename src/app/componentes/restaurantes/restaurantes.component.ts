import { Component } from '@angular/core';
import {faLocationDot,faPhone,faClock,faUtensils  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent {

  faUtensils=faUtensils;
  faLocationDot=faLocationDot;
  faPhone=faPhone;
  faClock=faClock;
}
