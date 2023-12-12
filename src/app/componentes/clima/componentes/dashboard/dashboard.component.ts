import { Component } from '@angular/core';
import { ClimaService } from '../../services/clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  URL=" ";

  Imagen='../../../../../assets/Imagenes/practica18/clima/clima.png';  //Var Imagen declarada con imagen por defecto a pedir
   
 ciudad='';
 temperatura=0;
 humedad=0;
 clima='';
 query=false;
 loading=false
 
 constructor(private _climaService: ClimaService){}
 
   ngOnInit(): void {
 
   }
 
   ObtenerClima(){
     this.query=false;
     this.loading=true
     /*console.log(this.ciudad);*/
     this._climaService.getClima(this.ciudad).subscribe(data => {  /* variables, consultas desde la API*/
     this.loading=false
     this.query=true;
     this.temperatura= data.main.temp - 273
     this.humedad= data.main.humidity
     this.clima= data.weather[0].main
 
     switch(this.clima){ //SWITCH para los casos de las distintos tipos de clima
       case  'Clear':
         this.Imagen='../../../../../assets/Imagenes/practica18/clima/soleado.png'
         break;
 
         case 'Clouds':
           this.Imagen='../../../../../assets/Imagenes/practica18/clima/nublado.png'
         break;
 
         case 'Rain':
           this.Imagen='../../../../../assets/Imagenes/practica18/clima/lluvia.png'
           break;
 
         case  'Snow':
           this.Imagen='../../../../../assets/Imagenes/practica18/clima/nevado.png'
           break;
 
         default:
           this.Imagen='../../../../../assets/Imagenes/practica18/clima/clima.png'
           break;
 
     }
 
     }, error => {
       console.log(error); /* muestra un error cuando no lo muestra  mientras sigue cargando*/
       this.loading=false
     })
 
   }
}
