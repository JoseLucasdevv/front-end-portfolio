import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Repositories } from '../types/repositories-interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FilteredReposService {
  filteredResult: Repositories[] = [];

  constructor(private _http: HttpClient) {}

  filteredData(data: Observable<Repositories[]>) {
    data.subscribe((data) => {
      data.filter((data) => {
        if (
          data.name === 'notes-world' ||
          data.name === 'clone-form-netflix' ||
          data.name === 'memoween'
        ) {
          this.filteredResult.push(data);
        }
      });
    });
  }
}
