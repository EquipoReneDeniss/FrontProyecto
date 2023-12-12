import { Component } from '@angular/core';
import {faLocationDot,faPhone,faClock,faBellConcierge,faBuildingColumns} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-museos',
  templateUrl: './museos.component.html',
  styleUrls: ['./museos.component.css']
})
export class MuseosComponent {
  faBuildingColumns=faBuildingColumns;
  faBellConcierge=faBellConcierge;
  faLocationDot=faLocationDot;
  faPhone=faPhone;
  faClock=faClock;
}
