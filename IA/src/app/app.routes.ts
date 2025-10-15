import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Problematicas } from './pages/problematicas/problematicas';
import { ImpactoLaboral } from './pages/impacto-laboral/impacto-laboral';
import { VentajasDesventajas } from './pages/ventajas-desventajas/ventajas-desventajas';
import { InfoGeneral } from './pages/info-general/info-general';
import { Confusiones } from './pages/confusiones/confusiones';
import { UsoCorrecto } from './pages/uso-correcto/uso-correcto';
import { Galeria } from './pages/galeria/galeria';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'problematicas', component: Problematicas },
  { path: 'impacto-laboral', component: ImpactoLaboral },
  { path: 'ventajas-desventajas', component: VentajasDesventajas },
  { path: 'info-general', component: InfoGeneral },
  { path: 'confusiones', component: Confusiones },
  { path: 'uso-correcto', component: UsoCorrecto },
  { path: 'galeria', component: Galeria }
];