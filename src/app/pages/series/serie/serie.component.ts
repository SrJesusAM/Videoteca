import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SeriesService } from 'src/app/services/series.service';
import { ActoresService, Actor } from 'src/app/services/actores.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styles: []
})
export class SerieComponent {

  serie:any = {};

  actor:any = {};

  actores: Actor[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private _seriesService: SeriesService,
              private _actoresService: ActoresService,
               private router: Router ) {

     this.activatedRoute.params.subscribe( params => {
       this.serie = this._seriesService.getSerie(params ['id']);
       this.actor = this._actoresService.getActor(params ['id']);
       // console.log (this.pelicula);
     });
    }

    ngOnInit() {
      this.actores = this._actoresService.getActores();
    }
  
    verActor(idx:number) {
      this.router.navigate( ['actores',idx] );
    }
  

}
