import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listado-json',
  templateUrl: './listado-json.page.html',
  styleUrls: ['./listado-json.page.scss'],
  standalone: false
})
export class ListadoJsonPage implements OnInit {

  listadoDieta: any;



  constructor(private activatedRoute: ActivatedRoute) { 

    this.activatedRoute.queryParams.subscribe(params => {
      if (params['listado']) {
        this.listadoDieta = JSON.parse(params['listado']); // Convertimos de JSON a objeto
      }
    });
  }





  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');

   alert(id);
  }

}
