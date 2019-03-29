import { Component, OnInit } from '@angular/core';
import { Actor, ActoresService } from 'src/app/services/actores.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-actor',
  templateUrl: './add-actor.component.html',
  styles: [
    `
    .ng-invalid.ng-touched:not(form) {
      border: 1px solid red;
    }
  `
  ]
})
export class AddActorComponent implements OnInit {

  actores: Actor[] = [];

  actor: Actor = {
    nombre: null,
    biografia: null,
    img: "assets/img/actores/imagen-prueba.jpg",
    nombreCompleto: null,
    nacimiento: null,
    nacionalidad: null,
    idx: this._actoresService.getActores().length

  }

  nacionalidades = ["Española", "Britanica", "Americana"];

  constructor(private _actoresService: ActoresService) { }

  ngOnInit() {
    this.actores = this._actoresService.getActores();
  }

  guardar(forma: NgForm) {
    // console.log("ngForm ", forma);
    // console.log("Pelicula: ", this.actor);
    this.actores.push(this.actor);
  }

}
