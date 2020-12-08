import { 
  Component,
  OnDestroy
} from '@angular/core';
import { CountryWeather } from '@modules/searchfield/CountryWeather';
import {
  ActivatedRoute,
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  ParamMap
} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-searchfield-page',
  templateUrl: './searchfield-page.component.html',
  styleUrls: ['./searchfield-page.component.scss']
})
export class SearchfieldPageComponent implements OnDestroy {
  searchResults: CountryWeather[];
  query: string;
  paramMap$: Subscription;
  spinning: boolean = false;
  showToast: boolean = false;
  emptyMessage: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.setSpinner();
    this.paramMap$ = this.activatedRoute.paramMap.subscribe(
      (params: ParamMap) => {
        this.query = params.get('countryQuery');
        this.resolvedDataHandler(
          this.activatedRoute.snapshot.data.searchResults
        );
      }
    );
  }

  ngOnDestroy(): void {
    this.paramMap$.unsubscribe();
  }

  close(): void {
    this.showToast = false;
  }

  resolvedDataHandler(resolvedData: CountryWeather[] | any): void {
    if (Array.isArray(resolvedData)) {
      this.searchResults = resolvedData;
      this.emptyMessage = false;
    } else if (typeof resolvedData !== 'undefined') {
      this.searchResults = undefined;
      this.showToast = true;
      this.emptyMessage = true;
    } else {
      this.searchResults = undefined;
    }
  }

  setSpinner(): void {
    this.router.events.subscribe((event: Event) => {
      switch(true) {
        case event instanceof NavigationStart: {
          this.spinning = true;
          break;
        }

        case event instanceof NavigationCancel:
        case event instanceof NavigationEnd:
        case event instanceof NavigationError: {
          this.spinning = false;
          break;
        }
        default: {
          break;
        }
      }
    });
  }
}
