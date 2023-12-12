import {faChartLine, faClock, faLocationDot, faPhone, faUtensils, faWheatAwn} from '@fortawesome/free-solid-svg-icons';

import { Component } from '@angular/core';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})

export class ActividadesComponent {
  categoryID: number = 4;
  faWheatAwn = faWheatAwn;
  faChartLine=faChartLine;
  faUtensils=faUtensils;
  faLocationDot=faLocationDot;
  faPhone=faPhone;
  faClock=faClock;

}
