import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { ActoresService, Actor } from 'src/app/services/actores.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit{

  pelicula:any = {};

  actor:any = {};

  actores: Actor[] = [];

  constructor( private activatedRoute: ActivatedRoute,
               private _peliculasService: PeliculasService,
               private _actoresService: ActoresService,
               private router: Router ) {

                this.activatedRoute.params.subscribe( params => {
                  this.pelicula = this._peliculasService.getPelicula(params ['id']);
                  this.actor = this._actoresService.getActor(params ['id']);
                  // console.log (this.pelicula);
                });

  
  
              }

  ngOnInit() {
    this.actores = this._actoresService.getActores();
  }

  verActor(idx:number) {
    this.router.navigate( ['actores',idx] );
  }



}
