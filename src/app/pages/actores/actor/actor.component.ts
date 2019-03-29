import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
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
    private _actoresService: ActoresService,
    private router: Router) {
    this.activatedRoute.params.subscribe(params => {
      this.actor = this._actoresService.getActor(params["id"]);
    });
  }
  ngOnInit() {
  }

  modificaActor() {
    // console.log(this.index);
    this.router.navigate( ['modificar-actor',this.actor.idx] )
    //this.heroeSeleccionado.emit(this.index);
  }


  eliminaActor(){
      this._actoresService.eliminarActor(this.actor.idx);
      this.router.navigate( ['actores']);
  }

}
