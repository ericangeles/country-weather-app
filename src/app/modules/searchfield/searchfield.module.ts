import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchfieldPageComponent } from './pages/searchfield-page/searchfield-page.component'
import { SearchfieldInputComponent } from './components/searchfield-input/searchfield-input.component';
import { SearchfieldResultsListComponent } from './components/searchfield-results-list/searchfield-results-list.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchfieldRoutingModule } from '@modules/searchfield/searchfield-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    SearchfieldRoutingModule
  ],
  declarations: [
    SearchfieldPageComponent,
    SearchfieldInputComponent,
    SearchfieldResultsListComponent
  ]
})
export class SearchfieldModule {}
