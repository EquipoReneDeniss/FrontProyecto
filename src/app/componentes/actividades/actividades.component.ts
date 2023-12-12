import { Component } from '@angular/core';
import {faLocationDot,faPhone,faClock,faUtensils, faChartLine, faWheatAwn} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent {
  faWheatAwn = faWheatAwn;
  faChartLine=faChartLine;
  faUtensils=faUtensils;
  faLocationDot=faLocationDot;
  faPhone=faPhone;
  faClock=faClock;

}
