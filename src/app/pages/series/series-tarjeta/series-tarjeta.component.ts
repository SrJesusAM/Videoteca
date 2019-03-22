import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-series-tarjeta',
  templateUrl: './series-tarjeta.component.html',
  styles: []
})
export class SeriesTarjetaComponent implements OnInit {

  @Input() serie:any = {};
  @Input() index: number;

  @Input() serieSeleccionada: EventEmitter<number>;

  constructor( private router: Router) {
    this.serieSeleccionada = new EventEmitter();
   }


  ngOnInit() {
  }

  verSerie(){
    this.router.navigate( ['series',this.index] )
  }

}
