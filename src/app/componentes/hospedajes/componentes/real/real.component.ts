import { Component } from '@angular/core';
import {faLocationDot,faPhone,faClock,faBellConcierge  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-real',
  templateUrl: './real.component.html',
  styleUrls: ['./real.component.css']
})
export class RealComponent {
  faBellConcierge=faBellConcierge;
  faLocationDot=faLocationDot;
  faPhone=faPhone;
  faClock=faClock;

}
