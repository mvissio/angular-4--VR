import {Component, OnInit} from '@angular/core';
import { Empleado} from './empleado';

@Component({
  selector: 'app-empleado',
  templateUrl: 'empleado.html'
})

export class EmpleadoComponent implements OnInit{

  public titulo = 'componente Empleados:';
  public empleado: Empleado;

  ngOnInit() {
    this.empleado = new Empleado();
    this.empleado.setConstructor('carlos',
      23, 'Jefe', true);
  }
  public cambiarValor() {
    this.empleado.contrato = !this.empleado.contrato;
  }
}
