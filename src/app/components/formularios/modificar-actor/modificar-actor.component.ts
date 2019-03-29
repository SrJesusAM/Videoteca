import { Component, OnInit } from '@angular/core';
import { Actor, ActoresService } from 'src/app/services/actores.service';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-modificar-actor',
  templateUrl: './modificar-actor.component.html',
  styles: []
})
export class ModificarActorComponent implements OnInit {

  forma: FormGroup;

  actores: Actor[] = [];

  actorInfo: Actor;

  nacionalidades = ["Española", "Britanica", "Estadounidense","Israelí","Canadiense"];

  constructor(private _actoresService: ActoresService,
              private activatedRoute: ActivatedRoute,
              ) {

      

    this.forma = new FormGroup({
      'nombre': new FormControl ('', [Validators.required, Validators.minLength(3)]),
      'biografia': new FormControl ('', [Validators.required, Validators.minLength(20)]),
      'img': new FormControl ('', []),
      'nombreCompleto': new FormControl ('', [Validators.required, Validators.minLength(3)]),
      'nacimiento': new FormControl ('', [Validators.required]),
      'nacionalidad': new FormControl ('', [Validators.required]),
      'idx': new FormControl (this._actoresService.getActores().length, []),
    });

    this.activatedRoute.params.subscribe(params => {
      this.actorInfo = this._actoresService.getActor(params["id"]);
       // console.log (this.pelicula);
             });
             
    this.forma.patchValue({
      nombre: this.actorInfo.nombre,
      biografia: this.actorInfo.biografia,
      img: this.actorInfo.img,
      nombreCompleto: this.actorInfo.nombreCompleto,
      nacimiento: formatDate(new Date(this.actorInfo.nacimiento), 'yyyy-MM-dd', 'en'),
      nacionalidad: this.actorInfo.nacionalidad,
      idx: this.actorInfo.idx,
    });

    // console.log(this.actorInfo);
    // console.log(this.forma.value)
   }

  ngOnInit() {
    this.actores = this._actoresService.getActores();
  }

  guardar() {
    // console.log("Actor: ", this.forma.value);
    this._actoresService.guardarActor(this.actorInfo.idx,this.forma.value)
  }


}
