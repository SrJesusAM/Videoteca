import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SeriesService, Serie } from 'src/app/services/series.service';


@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styles: [ ]

})
export class SeriesComponent implements OnInit {

  series: Serie[] = [];

  constructor(private _seriesService: SeriesService,
              private router: Router) { }

  ngOnInit() {
    this.series = this._seriesService.getSeries();
  }

  verSerie(idx:number) {
    this.router.navigate( ['series',idx] );
  }

}
