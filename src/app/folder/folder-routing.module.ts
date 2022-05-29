import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';

const routes: Routes = [
  {
    path: '',
    component: FolderPage,
    /*
    children:[    
  {
    path: 'historique-paiementfolder',
    loadChildren: () => import('../historique-paiement/historique-paiement.module').then( m => m.HistoriquePaiementPageModule)
  },
  {
    path: 'modifier-profile',
    loadChildren: () => import('../modifier-profile/modifier-profile.module').then( m => m.ModifierProfilePageModule)
  },
    ]*/
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
