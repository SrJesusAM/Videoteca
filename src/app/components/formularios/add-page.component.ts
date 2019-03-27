import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styles: []
})
export class AddPageComponent implements OnInit {

  constructor(private route: ActivatedRoute) { 
    this.route.params.subscribe( parametros =>{
      
    });

  }

  ngOnInit() {
  }

}
