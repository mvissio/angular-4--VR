import {Component} from '@angular/core';

@Component({
  selector: 'app-fruta',
  templateUrl: 'fruta.html'
})

export class FrutaComponent {
  public nombre_componente = 'componente Fruta';
  public listado_fruta = 'naranja, manzana, pera';
}
