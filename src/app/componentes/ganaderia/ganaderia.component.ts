import { Component } from '@angular/core';
import {faCow} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ganaderia',
  templateUrl: './ganaderia.component.html',
  styleUrls: ['./ganaderia.component.css']
})
export class GanaderiaComponent {
  faCow = faCow;
}
