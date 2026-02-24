import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-cuenta-regresiva',
  imports: [],
  templateUrl: './cuenta-regresiva.component.html',
  styleUrl: './cuenta-regresiva.component.css'
})

export class CuentaRegresivaComponent implements OnInit, OnDestroy {
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  
  private timer: any;
  private targetDate: Date = new Date('2026-10-10T00:00:00');

  ngOnInit(): void {
    this.updateCountdown();
    this.timer = setInterval(() => {
      this.updateCountdown();
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  private updateCountdown(): void {
    const now = new Date();
    const difference = this.targetDate.getTime() - now.getTime();
    
    if (difference <= 0) {
      // Si ya pasó la fecha
      this.days = 0;
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
      clearInterval(this.timer);
      return;
    }
    
    // Cálculos para obtener días, horas, minutos y segundos
    this.days = Math.floor(difference / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((difference % (1000 * 60)) / 1000);
  }
}