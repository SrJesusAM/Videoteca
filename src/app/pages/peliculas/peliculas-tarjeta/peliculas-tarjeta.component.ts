import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-peliculas-tarjeta',
  templateUrl: './peliculas-tarjeta.component.html',
  styles: []
})
export class PeliculasTarjetaComponent implements OnInit {

  @Input() pelicula:any = {};
  @Input() index: number;

  @Input() peliculaSeleccionada: EventEmitter<number>;

  constructor( private router: Router) {
    this.peliculaSeleccionada = new EventEmitter();
   }

  ngOnInit() {
  }

  verPelicula() {
    // console.log(this.index);
    this.router.navigate( ['peliculas',this.pelicula.idx] )
    //this.heroeSeleccionado.emit(this.index);
  }

}
