import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Home } from './pages/home/home';
import { Galeria } from './pages/galeria/galeria';
import { ImpactoLaboral } from './pages/impacto-laboral/impacto-laboral';
import { InfoGeneral } from './pages/info-general/info-general';
import { Problematicas } from './pages/problematicas/problematicas';
import { UsoCorrecto } from './pages/uso-correcto/uso-correcto';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    Home,
    Galeria,
    ImpactoLaboral,
    InfoGeneral,
    Problematicas,
    UsoCorrecto,
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('IA');
}
