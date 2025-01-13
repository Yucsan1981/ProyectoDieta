import { Component } from '@angular/core';
import { CompoDieta } from '../Modelo/CompoDieta'; // importa la clase CompoDieta
import { NavController } from '@ionic/angular'; // para navegar por url (función)
import { NavigationExtras } from '@angular/router';
import { MidataService } from '../midata.service'; // el nombre del dataService es el nombre de la página midata.service = MidataService

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  CompoDieta:any;
  nombreNuevo: string = "";
  calorias: number = 1;

  cd1: CompoDieta = new CompoDieta("Trigo",5);  
  cd2: CompoDieta = new CompoDieta("Pan",3);  
  cd3: CompoDieta = new CompoDieta("Leche",7);  

  aux?: CompoDieta; 
  

  listado: CompoDieta[] = [this.cd1, this.cd2, this.cd3 ];



  constructor(private navCtrl: NavController, private dataService: MidataService) {}

 agregarDieta(){
   this.aux = new CompoDieta(this.nombreNuevo,this.calorias);

  //con fun flecha
  const existe = this.listado.some(item => item.esIgualA(this.aux!));

   // Opcion clásica sin flecha
   /* const existe = this.listado.some(function(this: HomePage, item: CompoDieta) {
    return item.esIgualA(this.aux!);
  }.bind(this)); */

   if(existe)
      alert("ya existe el Componente");
   else
    this.listado.push(this.aux);  
 
 }
 
 goToBusca(){
  this.navCtrl.navigateForward('/busca');
 }


 variableGet:number = 8; //pasamos esto por

 //navegar y compartir json
 goTolistadoJson(){
  
  const navigationExtras: NavigationExtras = {
    queryParams: {
      listado: JSON.stringify(this.listado)// objeto "CompoDieta" a JSON y lo enviamos a la otra página //PRUEBA
    }

  };
  this.navCtrl.navigateForward(`/listado-json/${this.variableGet}`, navigationExtras); // Navegamos a pag: listado-json

}

// navegar y enviar datos por ****************   SERVICIO   ***********
goToListaServicio(){
  this.dataService.setData(this.listado);

   

   // Navegar a la siguiente página

   this.navCtrl.navigateForward('/lista-servicio');
}

 


 editarDieta(inx: number){
// Validamos que el índice sea válido
if (inx < 0 || inx >= this.listado.length) {
  console.error("Índice fuera de rango");
  return;
}

// Obtenemos el elemento a editar
const item = this.listado[inx];

// Pedimos los nuevos valores al usuario
const nuevoNom = prompt(`Introduce el nuevo nombre (actual: ${item.nombre}):`, item.nombre);
const nuevoNum = prompt(`Introduce las nuevas calorías (actual: ${item.calorias}):`, item.calorias.toString());

// Validamos los valores proporcionados
if (nuevoNom === null || nuevoNom.trim() === "") {
  console.warn("Nombre no válido. No se aplicaron cambios.");
  return;
}

const nuevoNumParsed = parseFloat(nuevoNum || "");
if (isNaN(nuevoNumParsed) || nuevoNumParsed < 0) {
  console.warn("Calorías no válidas. No se aplicaron cambios.");
  return;
}

// Actualizamos el objeto en el listado
this.listado[inx].nombre = nuevoNom.trim();
this.listado[inx].calorias = nuevoNumParsed;

console.log(`Elemento actualizado: ${JSON.stringify(this.listado[inx])}`);
}

 borrarDieta(inx: number){
    this.listado.splice(inx, 1);
 }








}
