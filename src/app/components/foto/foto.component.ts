import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-foto',
  imports: [],
  templateUrl: './foto.component.html',
  styleUrl: './foto.component.css'
})
export class FotoComponent {
  @Input() imageSrc: string = '';
  @Input() imageAlt: string = 'Imagen'; 
}