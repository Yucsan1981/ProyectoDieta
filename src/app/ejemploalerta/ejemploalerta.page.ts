import { Component, OnInit } from '@angular/core';
import { CompoDieta } from '../Modelo/CompoDieta';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ejemploalerta',
  templateUrl: './ejemploalerta.page.html',
  styleUrls: ['./ejemploalerta.page.scss'],
  standalone: false
})
export class EjemploalertaPage implements OnInit {



// esto deberiamos recibirlo por servicios SIGUIENTE PASO!!!!!!!
CompoDieta:any;
  nombreNuevo: string = "";
  calorias: number = 1;

  cd1: CompoDieta = new CompoDieta("Trigo",5);  
  cd2: CompoDieta = new CompoDieta("Pan",3);  
  cd3: CompoDieta = new CompoDieta("Leche",7);  

  aux?: CompoDieta; 
  

  listado: CompoDieta[] = [this.cd1, this.cd2, this.cd3 ];


  constructor(private alertControler: AlertController) { }

  ngOnInit() {
  }

  alertaModifica(inx: number){
    this.alertControler.create({
      header: 'Editar Dieta',
      inputs: [
        {
          name: 'nombre',
          type: 'text'
        },
        {
          name: 'calorias',
          type: 'number'
        }
      ],
      buttons: [
        {
          text: 'CANCELAR',
          role: 'cancel'
        },
        {
          text: 'ACTUALIZAR',
          handler: (data) => {
            console.log(data);
            let compoDieta = new CompoDieta(data.nombre,data.calorias);  
            this.listado[inx] = compoDieta;
          }
        }
      ]
    }).then(alert => {
      alert.present();
    });
  }



}
