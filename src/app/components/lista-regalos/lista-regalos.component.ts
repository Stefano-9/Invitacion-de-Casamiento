import { Component, EventEmitter, Output } from '@angular/core';
import { FormComponent } from "../form/form.component";

@Component({
  selector: 'app-lista-regalos',
  imports: [],

  templateUrl: './lista-regalos.component.html',
  styleUrl: './lista-regalos.component.css'
})
export class ListaRegalosComponent { 
  @Output() abrirModal:EventEmitter<boolean> = new EventEmitter<boolean>();

  Modal() {
    this.abrirModal.emit(true);
    document.body.classList.add('overflow-hidden'); 
  }

  cerrarModal() {
    this.abrirModal.emit(false);
    document.body.classList.remove('overflow-hidden');
  }
}
