import { Component, OnInit } from '@angular/core';
import { GetApiGithubService } from '../../services/get-api-github.service';
import { Repositories } from '../../types/repositories-interface';
import { Observable } from 'rxjs';

import { FilteredReposService } from 'src/app/services/filtered-repos.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.scss'],
  providers: [GetApiGithubService],
})
export class ProjetsComponent implements OnInit {
  repositories!: Observable<Repositories[]>;
  filteredResult!: Repositories[];
  deployUrl: string = environment.deployUrl;

  constructor(
    private _getApiService: GetApiGithubService,

    private _filteredRepos: FilteredReposService
  ) {}

  ngOnInit() {
    this._getApiService.getRepositories();

    this.repositories = this._getApiService.repositoreSubject;

    this._filteredRepos.filteredData(this.repositories);

    this.filteredResult = this._filteredRepos.filteredResult;
  }

  goToUrl(url: string) {
    window.open(`https://${url}${this.deployUrl}`, '_blank');
  }
}
