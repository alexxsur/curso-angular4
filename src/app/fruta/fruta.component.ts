import {Component} from '@angular/core';

@Component({
	selector: 'fruta',
	templateUrl: './fruta.component.html'
	})
export class FrutaComponent{
	public nombre_componente = 'Componente de fruta';
	public listado_frutas = 'Naranja, Manzana, Pera y Sandia';

	public nombre:string = 'Alex';
	public edad:number = 29;
    public mayorDeEdad:boolean = true;
    public trabajos:Array<string> = ['Carpintero','Albañil','Fontanero'];
    public trabajos_any:Array<any> = ['Carpintero',44,'Fontanero'];
    comodin:any = "Cualquier cosa";
}