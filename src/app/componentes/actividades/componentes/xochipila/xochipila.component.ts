import { Component } from '@angular/core';
import {faLocationDot,faPhone,faClock,  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-xochipila',
  templateUrl: './xochipila.component.html',
  styleUrls: ['./xochipila.component.css']
})
export class XochipilaComponent {
  faLocationDot=faLocationDot;
  faPhone=faPhone;
  faClock=faClock;
}
