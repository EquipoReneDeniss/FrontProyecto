import { Component } from '@angular/core';
import {faLocationDot,faPhone,faClock,faBellConcierge  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-villa-de-cortez',
  templateUrl: './villa-de-cortez.component.html',
  styleUrls: ['./villa-de-cortez.component.css']
})
export class VillaDeCortezComponent {
  faBellConcierge=faBellConcierge;
  faLocationDot=faLocationDot;
  faPhone=faPhone;
  faClock=faClock;
}
