import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas.service';


@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent {

  pelicula:any = {};

  constructor( private activatedRoute: ActivatedRoute,
               private _peliculasService: PeliculasService ) {

                this.activatedRoute.params.subscribe( params => {
                  this.pelicula = this._peliculasService.getPelicula(params ['id']);
                  // console.log (this.pelicula);
                });

  
  
              }


}
