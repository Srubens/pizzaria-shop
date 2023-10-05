import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { OrdemCompraComponent } from './components/ordem-compra/ordem-compra.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"produtos",
    component:ProdutoComponent
  },
  {
    path:"produto/:id",
    component:ProdutoComponent
  },
  {
    path:"ordem-compra",
    component:OrdemCompraComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
