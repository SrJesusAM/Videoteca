import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styles: []
})
export class SerieComponent implements OnInit {

  serie:any = {};

  constructor(private activatedRoute: ActivatedRoute,
              private _seriesService: SeriesService,
              private router: Router ) {

     this.activatedRoute.params.subscribe( params => {
       this.serie = this._seriesService.getSerie(params ['id']);
       // console.log (this.pelicula);
     });
    } 
  
 ngOnInit(){
 }
eliminarSerie(){
  this._seriesService.eliminarSerie(this.serie.idx);
  this.router.navigate( ['series']);
}

}

export class NgbdCollapseBasic {
  public isCollapsed = false;
}