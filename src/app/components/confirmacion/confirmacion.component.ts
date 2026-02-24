import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-confirmacion',
  imports: [],
  templateUrl: './confirmacion.component.html',
  styleUrl: './confirmacion.component.css'
})
export class ConfirmacionComponent {
  isModalOpen = false;
  
  toggleModal(): void {
    this.isModalOpen = !this.isModalOpen;
    
    // Prevenir scroll del body cuando el modal está abierto
    if (this.isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  confirmarAsistencia() {
    alert("¡Gracias por confirmar tu asistencia!");
  }
}