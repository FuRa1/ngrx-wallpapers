import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { SEARCH_WALLPAPERS } from '../../actions/wallpapers.effects';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public searchForm: FormGroup;

  constructor(
    private store: Store,
  ) {
  }

  ngOnInit(): void {
    this.initSearchForm();
  }

  private initSearchForm(): void {
    this.searchForm = new FormGroup({
      search: new FormControl(null)
    });
    this.searchForm.valueChanges
      .pipe(debounceTime(500))
      .subscribe((values: { search: string }) => {
        this.store.dispatch({ type: SEARCH_WALLPAPERS, searchString: values.search });
      });
  }
}
