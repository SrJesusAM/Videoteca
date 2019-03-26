import { Routes, RouterModule } from '@angular/router';

// Rutas
import { ADD_ROUTES } from './components/formularios/add-page.routes';

// Componentes
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { SeriesComponent } from './pages/series/series.component';
import { HomeComponent } from './pages/home/home.component';
import { PeliculaComponent } from './pages/peliculas/pelicula/pelicula.component';
import { SerieComponent } from './pages/series/serie/serie.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { ActorComponent } from './pages/actores/actor/actor.component';
import { ActoresComponent } from './pages/actores/actores.component';
import { AddPageComponent } from './components/formularios/add-page.component';



const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'peliculas', component: PeliculasComponent },
    { path: 'peliculas/:id', component: PeliculaComponent },
    { path: 'series', component: SeriesComponent },
    { path: 'series/:id', component: SerieComponent },
    { path: 'actores', component: ActoresComponent },
    { path: 'actores/:id', component: ActorComponent },
    { path: 'buscar/:termino', component: BuscadorComponent },
    {
         path: 'add', 
         component: AddPageComponent,
         children: ADD_ROUTES    
    },
    { path: '404', component: NopagefoundComponent },
    { path: '**', pathMatch:'full', redirectTo: '404' }
];


export const APP_ROUTES = RouterModule.forRoot(appRoutes);

