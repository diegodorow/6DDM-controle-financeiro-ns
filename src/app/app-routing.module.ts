import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { ItemsComponent } from './item/items.component'
import { ItemDetailComponent } from './item/item-detail.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
  { path: 'cadastroconta', loadChildren: () => import('./features/cadastroconta/cadastroconta.module').then(m => m.CadastroContaModule) },
  { path: 'cadastrolancamento', loadChildren: () => import('./features/cadastrolancamento/cadastrolancamento.module').then(m => m.CadastroLancamentoModule) },
  { path: 'details/:id', loadChildren: () => import('./features/details/details.module').then(m => m.DetailsModule) },
  { path: 'contadetalhe/:id', loadChildren: () => import('./features/contadetalhe/contadetalhe.module').then(m => m.ContaDetalheModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'items', component: ItemsComponent },
  { path: 'item/:id', component: ItemDetailComponent },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule { }
