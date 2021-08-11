import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscaDadosComponent } from './components/busca-dados/busca-dados.component';

const routes: Routes = [{ path: '', pathMatch: 'full', redirectTo: 'PesquisaDados' },
{ path: 'PesquisaDados', component: BuscaDadosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
