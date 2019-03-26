import { Component, OnInit } from '@angular/core';
import { Pelicula, PeliculasService } from 'src/app/services/peliculas.service';
import { Router } from '@angular/router';
import { Serie, SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {

  peliculas: Pelicula[] = [];
  series: Serie[] = [];

  constructor(private _peliculasService: PeliculasService,
    private _seriesService: SeriesService,
    private router: Router) { }

  ngOnInit() {
    this.peliculas = this._peliculasService.getPeliculas();
    this.series = this._seriesService.getSeries();
  }

  verPelicula(idx:number) {
    this.router.navigate( ['peliculas',idx] );
  }

  verSerie(idx:number){
    this.router.navigate( ['series', idx]);
  }

}
