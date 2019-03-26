import { Routes } from "@angular/router";

import { AddPeliculaComponent } from './add-pelicula/add-pelicula.component';
import { AddSerieComponent } from './add-serie/add-serie.component';

export const ADD_ROUTES: Routes = [
  { path: "pelicula", component: AddPeliculaComponent },
  { path: "serie", component: AddSerieComponent },
  { path: "**", pathMatch: "full", redirectTo: "pelicula" }

  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }
];