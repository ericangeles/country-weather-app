import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/searchfield',
    pathMatch: 'full'
  },
  {
    path: 'searchfield',
    loadChildren: () => import('./modules/searchfield/searchfield.module').then(mod => mod.SearchfieldModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
