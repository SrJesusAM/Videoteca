import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas.service';


@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit{

  pelicula:any = {};

  constructor( private activatedRoute: ActivatedRoute,
               private _peliculasService: PeliculasService,
               private router: Router ) {

                this.activatedRoute.params.subscribe( params => {
                  this.pelicula = this._peliculasService.getPelicula(params ['id']);
                  // console.log (this.pelicula);
                });

  
  
              }

  ngOnInit () {
  }

  eliminaPelicula(){
    this._peliculasService.eliminarPelicula(this.pelicula.idx);
    this.router.navigate( ['peliculas']);
}

}
