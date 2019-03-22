import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { SeriesService } from 'src/app/services/series.service';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: []
})
export class BuscadorComponent implements OnInit {

  peliculas: any[] = []
  series: any[] = []
  termino:string;

  constructor(private activatedRoute: ActivatedRoute,
    private _peliculasService: PeliculasService,
    private _seriesService: SeriesService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.peliculas = this._peliculasService.buscarPeliculas(params['termino']);
      this.series = this._seriesService.buscarSeries(params['termino']);
      
      // console.log(this.heroes);
    });

  }

}
