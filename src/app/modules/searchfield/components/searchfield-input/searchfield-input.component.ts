import { 
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-searchfield-input',
  templateUrl: './searchfield-input.component.html',
  styleUrls: ['./searchfield-input.component.scss']
})
export class SearchfieldInputComponent implements OnInit, OnChanges {
  @Input() query: string;
  searchCountryQuery = '';

  ngOnInit(): void {
    if (this.query) {
      this.searchCountryQuery = this.query;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.searchCountryQuery = changes.query.currentValue;
  }
}
