
//export IMPORTANTE
export class CompoDieta {

    nombre: string;
    calorias: number;

    constructor(nombre: string, calorias: number){
        this.nombre = nombre;
        this.calorias = calorias;
    }

    // comparamos solo el nombre
    esIgualA(otro: CompoDieta): boolean {
        return this.nombre === otro.nombre;
    }

    // esto es si quisieras que fueran iguales nombres y calorias
    /*
    esIgualA(otro: CompoDieta): boolean {
        return this.nombre === otro.nombre && this.calorias === otro.calorias;
    }
    */

}