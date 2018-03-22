import {Component} from '@angular/core';

@Component({
	selector: 'fruta',
	templateUrl: './fruta.component.html'
	})
export class FrutaComponent{
	public nombre_componente = 'Componente de fruta';
	public listado_frutas = 'Naranja, Manzana, Pera y Sandia';

	public nombre:string;
	public edad:number;
    public mayorDeEdad:boolean;
    public trabajos:Array<string>;
    public trabajos_any:Array<any>;
    comodin:any;

    constructor(){
		this.nombre = 'Alex';
		this.edad = 29;
	    this.mayorDeEdad = true;
	    this.trabajos = ['Carpintero','Albañil','Fontanero'];
	    this.trabajos_any = ['Carpintero',44,'Fontanero'];
	    this.comodin = "Cualquier cosa";
    }

    ngOnInit(){
    	console.log(this.trabajos);
    	console.log(this.trabajos_any);
    	console.log(this.comodin);
    	this.cambiarNombre("Alexander Cardona");
    	this.cambiarEdad(30);
    	console.log(this.nombre + " " + this.edad);    	

    	//Variables y alcance
    	var uno = 8;
    	var dos = 15;

    	if(uno === 8){
    		let uno = 3; //let alcance solo dentro del bloque del codigo en este caso dentro del if
    		var dos = 88; //var alcance en toda la clase

    		console.log("Dentro del if "+uno+" "+dos);
    	}
    	console.log("Fuera del if "+uno+" "+dos);
    }

    cambiarNombre(nombre){
    	this.nombre = 'Alex Cardona';
    }
    cambiarEdad(edad){
    	this.edad = edad;
    }    
}