import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styles: []
})
export class SerieComponent implements OnInit {

  serie:any = {};

  constructor(private activatedRoute: ActivatedRoute,
              private _seriesService: SeriesService, ) {

     this.activatedRoute.params.subscribe( params => {
       this.serie = this._seriesService.getSerie(params ['id']);
       // console.log (this.pelicula);
     });
    } 
  
 ngOnInit(){
   console.log(this.serie);
 }

}

export class NgbdCollapseBasic {
  public isCollapsed = false;
}