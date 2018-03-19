import {Component} from '@angular/core';

@Component({
	selector: 'empleados',
	templateUrl: './empleados.component.html'
	})
export class EmpleadosComponent{
	public nombre_componente = 'Componente de empleados';
	public listado_empleados = 'Alex, Daniela, Maria y Pablo';

}