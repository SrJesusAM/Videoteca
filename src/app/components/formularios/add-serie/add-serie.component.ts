import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Serie, SeriesService } from 'src/app/services/series.service';


@Component({
  selector: 'app-add-serie',
  templateUrl: './add-serie.component.html',
  styles: [
    `
    .ng-invalid.ng-touched:not(form) {
      border: 1px solid red;
    }
  `
  ]
})
export class AddSerieComponent implements OnInit {

  forma: FormGroup;

  series: Serie[];

  productoras = ["Atresmedia", "Marvel", "DC"];

  episodios = ["Episodio 1", "Episodio 2", "Episodio 3"]

  constructor(private _seriesService: SeriesService) { 

    this.forma = new FormGroup({
      'titulo': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'sinopsis': new FormControl('', [Validators.required, Validators.minLength(20)]),
      'img': new FormControl('assets/img/series/imagen-prueba.jpg', []),
      'estreno': new FormControl(new Date(), [Validators.required]),
      'productora': new FormControl('', [Validators.required]),
      'actores': new FormControl('', ),
      'idx': new FormControl(this._seriesService.getSeries().length, []),
       /* 'contenido': new FormGroup({
        'temporada': new FormControl(1, Validators.required),
        'episodios': new FormArray([
          new FormControl('Episodio 1.1', Validators.required)
        ])
      })*/
    
    })

  }

  ngOnInit() {
    this.series = this._seriesService.getSeries();
  }

  /* agregarEpisodio() {
    (<FormArray>this.forma.controls['contenido'].controls['episodios']).push(
      new FormControl('Episodio 1', Validators.required)
      )
    }
  */ 

  guardarCambios(){
    // console.log(this.forma.value);
    this.series.push(this.forma.value);
    
  }
}
