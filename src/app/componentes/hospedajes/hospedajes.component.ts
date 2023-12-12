import { Component } from '@angular/core';
import {faLocationDot,faPhone,faClock,faBellConcierge  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hospedajes',
  templateUrl: './hospedajes.component.html',
  styleUrls: ['./hospedajes.component.css']
})
export class HospedajesComponent {
  faBellConcierge=faBellConcierge;
  faLocationDot=faLocationDot;
  faPhone=faPhone;
  faClock=faClock;

}
