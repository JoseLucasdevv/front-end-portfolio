import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { Repositories } from '../types/repositories-interface';
@Injectable({
  providedIn: 'root',
})
export class GetApiGithubService {
  repositories = new BehaviorSubject<Repositories[]>([]);
  repositoreSubject = this.repositories.asObservable();

  constructor(private _http: HttpClient) {}

  getRepositories() {
    this._http.get<Repositories[]>(environment.apiKey).subscribe((data) => {
      this.repositories.next(data);
    });
  }
}
