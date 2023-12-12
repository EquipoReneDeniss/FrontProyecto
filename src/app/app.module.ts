import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { RestaurantesComponent } from './componentes/restaurantes/restaurantes.component';
import { FooterComponent } from './componentes/footer/footer.component';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { ClimaComponent } from './componentes/clima/clima.component';
import { DashboardComponent } from './componentes/clima/componentes/dashboard/dashboard.component';
import { NavbarClimaComponent } from './componentes/clima/componentes/navbar-clima/navbar-clima.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RestaurantesComponent,
    FooterComponent,
    HospedajesComponent,
    MuseosComponent,
    AgriculturaComponent,
    GanaderiaComponent,
    ActividadesComponent,
    MoliendaComponent,
    TerrazaComponent,
    ElCuateComponent,
    LoginComponent,
    ComentariosComponent,
    RegisterComponent,
    VillaDeCortezComponent,
    RealComponent,
    CasaBlancaComponent,
    InicioComponent,
    CasaCarranzaComponent,
    TrilobitComponent,
    CruzCelestialComponent,
    XochipilaComponent,
    PlazaCivicaComponent,
    ClimaComponent,
    DashboardComponent,
    NavbarClimaComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
