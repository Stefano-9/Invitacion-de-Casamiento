import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DespedidaComponent } from './components/despedida/despedida.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { ConfirmacionComponent } from './components/confirmacion/confirmacion.component';
import { CuandoComponent } from './components/cuando/cuando.component';
import { DondeComponent } from './components/donde/donde.component';
import { DresscodeComponent } from './components/dresscode/dresscode.component';
import { FotoComponent } from './components/foto/foto.component';
import { IntinerarioComponent } from './components/intinerario/intinerario.component';
import { ListaRegalosComponent } from './components/lista-regalos/lista-regalos.component';
import { VersiculoLemaComponent } from './components/versiculo-lema/versiculo-lema.component';
import { FadeInDirective } from './directives/fade-in.directive';
import { FormComponent } from './components/form/form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    DespedidaComponent,
    BienvenidaComponent,
    ConfirmacionComponent,
    CuandoComponent,
    DondeComponent,
    DresscodeComponent,
    FotoComponent,
    IntinerarioComponent,
    ListaRegalosComponent,
    VersiculoLemaComponent,
    FadeInDirective,
    FormComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'invitacion-casamiento';
  ModalState: boolean = false;
  
  player: any;
  reproduciendo: boolean = false;
  reproductorListo: boolean = false;

  ngOnInit() {
    // 1. Cargar API de YouTube
    if (!(window as any).YT) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    (window as any).onYouTubeIframeAPIReady = () => {
      this.initPlayer();
    };

    if ((window as any).YT && (window as any).YT.Player) {
      this.initPlayer();
    }

    // 2. "TRUCO" PARA EL AUTOPLAY: 
    // Como los navegadores bloquean el sonido automático, esto hace que 
    // la música empiece apenas el invitado toque cualquier parte de la pantalla.
    document.addEventListener('click', () => {
      if (this.reproductorListo && this.player && !this.reproduciendo) {
        this.player.playVideo();
        this.reproduciendo = true;
      }
    }, { once: true });
  }

  initPlayer() {
    const videoId = 'eTKeQhYVvbQ'; 
    this.player = new (window as any).YT.Player('youtube-player', {
      height: '0',
      width: '0',
      videoId: "eTKeQhYVvbQ",
      playerVars: {
        'autoplay': 1, // ACTIVADO: Intenta sonar solo
        'controls': 0,
        'loop': 1,
        'playlist': "eTKeQhYVvbQ",
        'origin': window.location.origin
      },
      events: {
        'onReady': () => {
          this.reproductorListo = true;
          // Si el navegador permite autoplay, esto lo dispara
          this.player.playVideo();
        },
        'onStateChange': (event: any) => {
          if (event.data === (window as any).YT.PlayerState.PLAYING) {
            this.reproduciendo = true;
          } else {
            this.reproduciendo = false;
          }
        }
      }
    });
  }

  toggleMusica() {
    if (this.reproductorListo && this.player) {
      if (this.reproduciendo) {
        this.player.pauseVideo();
      } else {
        this.player.playVideo();
      }
      this.reproduciendo = !this.reproduciendo;
    }
  }

  abrirModal(state: boolean) {
    this.ModalState = state;
    if (state) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }
}