import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Problematicas } from './pages/problematicas/problematicas';
import { ImpactoLaboral } from './pages/impacto-laboral/impacto-laboral';
import { InfoGeneral } from './pages/info-general/info-general';
import { UsoCorrecto } from './pages/uso-correcto/uso-correcto';
import { Galeria } from './pages/galeria/galeria';

export const routes: Routes = [
  { path: "", component: Home, pathMatch: 'full' },
  { path: "home", component: Home },
  { path: "galeria", component: Galeria },
  { path: "impacto-laboral", component: ImpactoLaboral },
  { path: "info-general", component: InfoGeneral },
  { path: "problematicas", component: Problematicas },
  { path: "uso-correcto", component: UsoCorrecto },
  { path: "**", redirectTo: '' }
];
