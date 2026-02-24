import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  imports: [NgIf],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Input() mostrar = false;
  @Output() abrirModal:EventEmitter<boolean> = new EventEmitter<boolean>();

  cerrarModal() {
    this.abrirModal.emit(false);
    document.body.classList.remove('overflow-hidden');
  }
}
