import { Component } from '@angular/core';
import {faUtensils,faBellConcierge,faBuildingColumns,faChartLine,faWheatAwn,faCow,} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  faCow=faCow;
  faWheatAwn=faWheatAwn;
  faChartLine=faChartLine
  faBuildingColumns=faBuildingColumns;
  faUtensils=faUtensils;
  faBellConcierge=faBellConcierge;
}
