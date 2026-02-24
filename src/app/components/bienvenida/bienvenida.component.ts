import { Component } from '@angular/core';
import { CuentaRegresivaComponent } from "../cuenta-regresiva/cuenta-regresiva.component";

@Component({
  selector: 'app-bienvenida',
  imports: [CuentaRegresivaComponent],
  templateUrl: './bienvenida.component.html',
  styleUrl: './bienvenida.component.css'
})
export class BienvenidaComponent {

}
