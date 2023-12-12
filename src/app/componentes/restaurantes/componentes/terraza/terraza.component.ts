import { Component } from '@angular/core';
import {faLocationDot,faPhone,faClock,  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-terraza',
  templateUrl: './terraza.component.html',
  styleUrls: ['./terraza.component.css']
})
export class TerrazaComponent {
  faLocationDot=faLocationDot;
  faPhone=faPhone;
  faClock=faClock;

}
