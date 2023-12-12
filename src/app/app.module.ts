import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, OnInit } from '@angular/core';

import { ActividadesComponent } from './componentes/actividades/actividades.component';
import { AgriculturaComponent } from './componentes/agricultura/agricultura.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CasaBlancaComponent } from './componentes/hospedajes/componentes/casa-blanca/casa-blanca.component';
import { CasaCarranzaComponent } from './componentes/museos/componentes/casa-carranza/casa-carranza.component';
import { ClimaComponent } from './componentes/clima/clima.component';
import { ComentariosComponent } from './componentes/comentarios/comentarios.component';
import { CruzCelestialComponent } from './componentes/actividades/componentes/cruz-celestial/cruz-celestial.component';
import { DashboardComponent } from './componentes/clima/componentes/dashboard/dashboard.component';
import { ElCuateComponent } from './componentes/restaurantes/componentes/el-cuate/el-cuate.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './componentes/footer/footer.component';
import { GanaderiaComponent } from './componentes/ganaderia/ganaderia.component';
import { HospedajesComponent } from './componentes/hospedajes/hospedajes.component';
import { HttpClientModule } from '@angular/common/http';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MoliendaComponent } from './componentes/restaurantes/componentes/molienda/molienda.component';
import { MuseosComponent } from './componentes/museos/museos.component';
import { NavbarClimaComponent } from './componentes/clima/componentes/navbar-clima/navbar-clima.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PlazaCivicaComponent } from './componentes/actividades/componentes/plaza-civica/plaza-civica.component';
import { RealComponent } from './componentes/hospedajes/componentes/real/real.component';
import { RegisterComponent } from './componentes/register/register.component';
import { RestaurantesComponent } from './componentes/restaurantes/restaurantes.component';
import { TerrazaComponent } from './componentes/restaurantes/componentes/terraza/terraza.component';
import { TrilobitComponent } from './componentes/museos/componentes/trilobit/trilobit.component';
import { VillaDeCortezComponent } from './componentes/hospedajes/componentes/villa-de-cortez/villa-de-cortez.component';
import { XochipilaComponent } from './componentes/actividades/componentes/xochipila/xochipila.component';

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
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
