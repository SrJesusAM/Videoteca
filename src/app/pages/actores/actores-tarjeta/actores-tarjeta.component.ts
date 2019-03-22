import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actores-tarjeta',
  templateUrl: './actores-tarjeta.component.html',
  styles: []
})
export class ActoresTarjetaComponent implements OnInit {

  @Input() actor:any = {};
  @Input() index: number;

  @Input() actorSeleccionado: EventEmitter<number>;

  constructor( private router: Router) {
    this.actorSeleccionado = new EventEmitter();
   }

  ngOnInit() {
  }

  verActor() {
    // console.log(this.index);
    this.router.navigate( ['actores',this.index] )
    //this.heroeSeleccionado.emit(this.index);
  }

}
