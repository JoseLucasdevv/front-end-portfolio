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
          data.name === 'Add-task-List' ||
          data.name === 'clone-form-netflix' ||
          data.name === 'first-portfolio'
        ) {
          this.filteredResult.push(data);
        }
      });
    });
  }
}
