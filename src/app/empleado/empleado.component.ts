import {Component} from '@angular/core';
import {Empleado} from './empleado';

@Component({
	selector: 'empleado',
	templateUrl: './empleado.component.html'
	})
export class EmpleadoComponent{
	public titulo = 'Componente Empleado';

    public empleado:Empleado;
    public trabajadores:Array<Empleado>;

    constructor(){
      this.empleado = new Empleado('Ricardo Arjona',78,'Cantante',true);
      this.trabajadores = [
       new Empleado('Manolo Perez',47,'Manager',true),
       new Empleado('Juan Mesa',24,'Mesero',false),
       new Empleado('Sofia Henao',23,'Contadora',true)
      ];
    }

	ngOnInit(){		
		console.log(this.empleado);
		console.log(this.trabajadores);
	}
}