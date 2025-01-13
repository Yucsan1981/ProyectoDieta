import { Component, OnInit } from '@angular/core';
import { MidataService } from '../midata.service';

@Component({
  selector: 'app-lista-servicio',
  templateUrl: './lista-servicio.page.html',
  styleUrls: ['./lista-servicio.page.scss'],
  standalone: false
})
export class ListaServicioPage implements OnInit {


  receivedData: any;


  constructor(private dataService: MidataService) { }


  ngOnInit() {

    this.receivedData = this.dataService.getData();
    
    console.log(this.receivedData);
  }

}
