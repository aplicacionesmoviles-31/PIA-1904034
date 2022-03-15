import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { Routes, RouterModule } from '@angular/router';
import  { FeedComponent } from './feed/feed.component';
import { PerfilComponent } from './perfil/perfil.component';
import { TabsComponent } from './tabs/tabs.component';

const routes: Routes = [
  /*{ path: 'feed', component: FeedComponent },
  { path: 'perfil', component: PerfilComponent }*/
  { 
    path: 'feed',
    component: FeedComponent,
    loadChildren: () => import('./feed/feed.module').then(m => m.FeedModule)
  },
  {
    path: 'perfil',
    component: PerfilComponent,
    loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
    
  ], 
  exports: [RouterModule]
})
export class RoutesModule { }