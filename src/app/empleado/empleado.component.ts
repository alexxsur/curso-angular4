import {Component} from '@angular/core';

@Component({
	selector: 'empleado',
	templateUrl: './empleado.component.html'
	})
export class EmpleadoComponent{
	public titulo = 'Título del componente empleado';
	public listado_empleado = 'Alex, Daniela, Maria y Pablo';

}