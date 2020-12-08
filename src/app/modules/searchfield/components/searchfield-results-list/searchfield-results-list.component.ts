import { 
  Component,
  Input
} from '@angular/core';
import { CountryWeather } from '@modules/searchfield/CountryWeather';

@Component({
  selector: 'app-searchfield-results-list',
  templateUrl: './searchfield-results-list.component.html',
  styleUrls: ['./searchfield-results-list.component.scss']
})
export class SearchfieldResultsListComponent {
  @Input() searchResults: CountryWeather[];

  constructor() {}
}
