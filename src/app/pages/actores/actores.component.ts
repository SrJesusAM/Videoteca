import { Component, OnInit } from '@angular/core';
import { Actor, ActoresService } from 'src/app/services/actores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actores',
  templateUrl: './actores.component.html',
  styles: []
})
export class ActoresComponent implements OnInit {

  actores: Actor[] = [];

  constructor(private _actoresService: ActoresService,
              private router: Router) {
                
              }

  ngOnInit() {
    this.actores = this._actoresService.getActores();
  }

  verActor(idx:number) {
    this.router.navigate( ['actores',idx] );
  }
}
