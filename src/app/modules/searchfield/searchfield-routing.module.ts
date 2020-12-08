import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchfieldPageComponent } from '@modules/searchfield/pages/searchfield-page/searchfield-page.component';
import { SearchfieldResolverService } from '@modules/searchfield/searchfield-resolver.service';

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
        path: ':countryQuery',
        component: SearchfieldPageComponent,
        resolve: {
          searchResults: SearchfieldResolverService
        }
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
  ],
  providers: [
    SearchfieldResolverService
  ]
})
export class SearchfieldRoutingModule {}
