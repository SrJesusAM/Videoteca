import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTES } from './app.routes';

// Servicios
import { PeliculasService } from './services/peliculas.service';
import { SeriesService } from './services/series.service';

// Componentes
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';


import { HeaderComponent } from './shared/header/header.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { HomeComponent } from './pages/home/home.component';

import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { PeliculasTarjetaComponent } from './pages/peliculas/peliculas-tarjeta/peliculas-tarjeta.component';
import { PeliculaComponent } from './pages/peliculas/pelicula/pelicula.component';

import { SeriesComponent } from './pages/series/series.component';
import { SeriesTarjetaComponent } from './pages/series/series-tarjeta/series-tarjeta.component';
import { SerieComponent } from './pages/series/serie/serie.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { FooterComponent } from './shared/footer/footer.component';

import { ActorComponent } from './pages/actores/actor/actor.component';
import { ActoresComponent } from './pages/actores/actores.component';
import { ActoresTarjetaComponent } from './pages/actores/actores-tarjeta/actores-tarjeta.component';
import { AddPeliculaComponent } from './components/formularios/add-pelicula/add-pelicula.component';
import { AddSerieComponent } from './components/formularios/add-serie/add-serie.component';





@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    PeliculasComponent,
    SeriesComponent,
    HeaderComponent,
    NopagefoundComponent,
    HomeComponent,
    PeliculasTarjetaComponent,
    SeriesTarjetaComponent,
    SerieComponent,
    PeliculaComponent,
    BuscadorComponent,
    FooterComponent,
    ActorComponent,
    ActoresComponent,
    ActoresTarjetaComponent,
    AddPeliculaComponent,
    AddSerieComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES
  ],
  providers: [
    PeliculasService,
    SeriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
