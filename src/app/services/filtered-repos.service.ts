import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Repositories } from '../types/repositories-interface';
import { Languages } from '../types/languages-interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FilteredReposService {
  languagesSubject = new Subject<Languages>();
  filteredResult: Repositories[] = [];
  languages: Languages[] = [];
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

          this._http
            .get<Languages>(data.languages_url)
            .subscribe((data: Languages) => {
              this.languagesSubject.next(data);
            });
        }
      });
    });
  }
}
