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
    public trabajador_externo:boolean;

    constructor(){
      this.empleado = new Empleado('Ricardo Arjona',78,'Cantante',true);
      this.trabajadores = [
       new Empleado('Manolo Perez',47,'Manager',false),
       new Empleado('Juan Mesa',24,'Mesero',false),
       new Empleado('Sofia Henao',23,'Contadora',true)
      ];
      this.trabajador_externo = false;
    }

	ngOnInit(){		
		console.log(this.empleado);
		console.log(this.trabajadores);
	}

	cambiarExterno(valor){
		this.trabajador_externo = valor;
	}
}