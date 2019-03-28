import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Pelicula, PeliculasService } from 'src/app/services/peliculas.service';
import { Actor, ActoresService } from 'src/app/services/actores.service';

@Component({
  selector: 'app-add-pelicula',
  templateUrl: './add-pelicula.component.html',
  styles: [
    `
    .ng-invalid.ng-touched:not(form) {
      border: 1px solid red;
    }
  `
  ]
})
export class AddPeliculaComponent {

  peliculas: Pelicula[] = []

  actores: Actor[] = []

  pelicula: Pelicula = {
    titulo: null,
    sinopsis: null,
    img: "assets/img/peliculas/imagen-prueba.jpg",
    estreno: null,
    productora: null,
    idx: this._peliculasService.getPeliculas().length,
  };

  productoras = ["Atresmedia", "Marvel", "DC"];

  constructor(private _actoresService: ActoresService,
              private _peliculasService: PeliculasService) { }

  ngOnInit() {
    this.actores = this._actoresService.getActores();
    this.peliculas = this._peliculasService.getPeliculas();
  }

  guardar(forma: NgForm) {
    console.log("ngForm ", forma);
    console.log("Pelicula: ", this.pelicula);
    this.peliculas.push(this.pelicula);
  }
}
