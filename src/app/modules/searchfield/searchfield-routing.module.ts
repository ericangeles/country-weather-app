import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchfieldPageComponent } from '@modules/searchfield/pages/searchfield-page/searchfield-page.component';

const routes: Routes = [
  {
    path: 'searchfield',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: SearchfieldPageComponent
      },
      {
        path: 'country:Query',
        component: SearchfieldPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SearchfieldRoutingModule {}
