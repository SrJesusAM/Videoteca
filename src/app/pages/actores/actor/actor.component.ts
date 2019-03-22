import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ActoresService } from "src/app/services/actores.service";
import { PeliculasService, Pelicula } from "src/app/services/peliculas.service";
import { SeriesService, Serie } from "src/app/services/series.service";

@Component({
  selector: "app-actor",
  templateUrl: "./actor.component.html",
  styles: []
})
export class ActorComponent {
  actor: any = {};

  pelicula: any = {};

  serie: any = {};

  peliculas: Pelicula[] = [];

  series: Serie[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private _actoresService: ActoresService,
    private _peliculasService: PeliculasService,
    private _seriesService: SeriesService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.pelicula = this._peliculasService.getPelicula(params["id"]);
      this.actor = this._actoresService.getActor(params["id"]);
      this.serie = this._seriesService.getSerie(params["id"]);
      // console.log (this.pelicula);
    });
  }
  ngOnInit() {
    this.peliculas = this._peliculasService.getPeliculas();
    this.series = this._seriesService.getSeries();
  }

  verPelicula(idx: number) {
    this.router.navigate(["peliculas", idx]);
  }

  verSerie(idx: number) {
    this.router.navigate(["series", idx]);
  }
}
