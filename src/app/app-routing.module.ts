import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantesComponent } from './componentes/restaurantes/restaurantes.component';
import { HospedajesComponent } from './componentes/hospedajes/hospedajes.component';
import { MuseosComponent } from './componentes/museos/museos.component';
import { AgriculturaComponent } from './componentes/agricultura/agricultura.component';
import { GanaderiaComponent } from './componentes/ganaderia/ganaderia.component';
import { ActividadesComponent } from './componentes/actividades/actividades.component';
import { MoliendaComponent } from './componentes/restaurantes/componentes/molienda/molienda.component';
import { TerrazaComponent } from './componentes/restaurantes/componentes/terraza/terraza.component';
import { ElCuateComponent } from './componentes/restaurantes/componentes/el-cuate/el-cuate.component';
import { LoginComponent } from './componentes/login/login.component';
import { ComentariosComponent } from './componentes/comentarios/comentarios.component';
import { RegisterComponent } from './componentes/register/register.component';
import { VillaDeCortezComponent } from './componentes/hospedajes/componentes/villa-de-cortez/villa-de-cortez.component';
import { RealComponent } from './componentes/hospedajes/componentes/real/real.component';
import { CasaBlancaComponent } from './componentes/hospedajes/componentes/casa-blanca/casa-blanca.component';
import { InicioComponent } from './inicio/inicio.component';
import { CasaCarranzaComponent } from './componentes/museos/componentes/casa-carranza/casa-carranza.component';
import { TrilobitComponent } from './componentes/museos/componentes/trilobit/trilobit.component';
import { CruzCelestialComponent } from './componentes/actividades/componentes/cruz-celestial/cruz-celestial.component';
import { XochipilaComponent } from './componentes/actividades/componentes/xochipila/xochipila.component';
import { PlazaCivicaComponent } from './componentes/actividades/componentes/plaza-civica/plaza-civica.component';


const routes: Routes = [
  {path:'restaurantes',component:RestaurantesComponent},
  {path:'hospedajes',component:HospedajesComponent},
  {path:'museos',component:MuseosComponent},
  {path:'agricultura',component:AgriculturaComponent},
  {path:'ganaderia',component:GanaderiaComponent},
  {path:'actividades',component:ActividadesComponent},
  {path:'molienda',component:MoliendaComponent},
  {path:'terraza',component:TerrazaComponent},
  {path:'elCuate',component:ElCuateComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'comentarios',component:ComentariosComponent},
  {path:'villaDeCortez',component:VillaDeCortezComponent},
  {path:'comentarios',component:ComentariosComponent},
  {path:'real',component:RealComponent},
  {path:'casaBlanca',component:CasaBlancaComponent},
  {path:'casaCarranza',component:CasaCarranzaComponent},
  {path:'trilobit',component:TrilobitComponent},
  {path:'cruzCelestial',component:CruzCelestialComponent},
  {path:'xochipila',component:XochipilaComponent},
  {path:'trilobit',component:TrilobitComponent},
  {path:'plazaCivica',component:PlazaCivicaComponent},
  {path:'**', component:InicioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
