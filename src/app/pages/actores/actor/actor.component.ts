import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ActoresService } from "src/app/services/actores.service";

@Component({
  selector: "app-actor",
  templateUrl: "./actor.component.html",
  styles: []
})
export class ActorComponent {
  actor: any = {};


  constructor(
    private activatedRoute: ActivatedRoute,
    private _actoresService: ActoresService) {
    this.activatedRoute.params.subscribe(params => {
      this.actor = this._actoresService.getActor(params["id"]);
      // console.log (this.pelicula);
    });
  }
  ngOnInit() {

  }

}
