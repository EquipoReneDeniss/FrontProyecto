import { Component } from '@angular/core';
import {faLocationDot,faPhone,faClock,  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-el-cuate',
  templateUrl: './el-cuate.component.html',
  styleUrls: ['./el-cuate.component.css']
})
export class ElCuateComponent {
  faLocationDot=faLocationDot;
  faPhone=faPhone;
  faClock=faClock;
}
