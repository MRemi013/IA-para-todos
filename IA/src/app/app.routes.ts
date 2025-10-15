import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Confusiones } from './pages/confusiones/confusiones';
import { Galeria } from './pages/galeria/galeria';
import { ImpactoLaboral } from './pages/impacto-laboral/impacto-laboral';
import { InfoGeneral } from './pages/info-general/info-general';
import { Problematicas } from './pages/problematicas/problematicas';
import { UsoCorrecto } from './pages/uso-correcto/uso-correcto';
import { VentajasDesventajas } from './pages/ventajas-desventajas/ventajas-desventajas';

export const routes: Routes = [
    {path:"",component:Home},
    {path:"home",component:Home},
    {path:"confusiones",component:Confusiones},
    {path:"galeria",component:Galeria},
    {path:"impacto laboral",component:ImpactoLaboral},
    {path:"info general",component:InfoGeneral},
    {path:"problematicas",component:Problematicas},
    {path:"uso correcto",component:UsoCorrecto},
    {path:"ventajas y desventajas",component:VentajasDesventajas}
];