import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PeliculasService, Pelicula } from 'src/app/services/peliculas.service';


@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styles: [ ]

})
export class PeliculasComponent implements OnInit {

  peliculas: Pelicula[] = [];

  constructor(private _peliculasService: PeliculasService,
              private router: Router) { }

  ngOnInit() {
    this.peliculas = this._peliculasService.getPeliculas();
  }

  verPelicula(idx:number) {
    this.router.navigate( ['peliculas',idx] );
  }

}
