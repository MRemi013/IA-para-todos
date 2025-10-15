import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './pages/home/home';
import { Confusiones } from './pages/confusiones/confusiones';
import { Galeria } from './pages/galeria/galeria';
import { ImpactoLaboral } from './pages/impacto-laboral/impacto-laboral';
import { InfoGeneral } from './pages/info-general/info-general';
import { Problematicas } from './pages/problematicas/problematicas';
import { UsoCorrecto } from './pages/uso-correcto/uso-correcto';
import { VentajasDesventajas } from './pages/ventajas-desventajas/ventajas-desventajas';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Home,Confusiones,Galeria,ImpactoLaboral,InfoGeneral,Problematicas,UsoCorrecto,VentajasDesventajas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('IA');
}
