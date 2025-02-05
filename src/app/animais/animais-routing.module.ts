import { DetalheAnimaisComponent } from './detalhe-animais/detalhe-animais.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaAnimaisComponent } from './lista-animais/lista-animais.component';

const routes: Routes = [
  {
    path: '',
    component: ListaAnimaisComponent,
  },
  {
    path: ':animalId',
    component: DetalheAnimaisComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimaisRoutingModule {}
