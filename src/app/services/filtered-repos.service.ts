import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Repositories } from '../types/repositories-interface';

@Injectable({
  providedIn: 'root',
})
export class FilteredReposService {
  filteredResult: Repositories[] = [];

  constructor() {}

  filteredData(data: Observable<Repositories[]>) {
    data.subscribe((data) => {
      this.filteredResult = data.filter((data) => {
        if (
          data.name === 'notes-world' ||
          data.name === 'receiver-management-api' ||
          data.name === 'memoween'
        ) {
          this.filteredResult.push(data);
        }
      });
    });
  }
}
