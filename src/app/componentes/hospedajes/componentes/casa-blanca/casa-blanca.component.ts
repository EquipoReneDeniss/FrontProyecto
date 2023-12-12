import { Component } from '@angular/core';
import {faLocationDot,faPhone,faClock,faBellConcierge  } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-casa-blanca',
  templateUrl: './casa-blanca.component.html',
  styleUrls: ['./casa-blanca.component.css']
})
export class CasaBlancaComponent {
  faBellConcierge=faBellConcierge;
  faLocationDot=faLocationDot;
  faPhone=faPhone;
  faClock=faClock;
}
