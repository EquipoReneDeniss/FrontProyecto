import {faBellConcierge, faBuildingColumns, faClock, faLocationDot, faPhone} from '@fortawesome/free-solid-svg-icons';

import { Component } from '@angular/core';

@Component({
  selector: 'app-museos',
  templateUrl: './museos.component.html',
  styleUrls: ['./museos.component.css']
})
export class MuseosComponent {
  categoryID: number = 3;
  faBuildingColumns=faBuildingColumns;
  faBellConcierge=faBellConcierge;
  faLocationDot=faLocationDot;
  faPhone=faPhone;
  faClock=faClock;
}
