import { Component, OnInit } from '@angular/core';
import { GetApiGithubService } from '../../services/get-api-github.service';
import { Repositories } from '../../types/repositories-interface';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FilteredReposService } from 'src/app/services/filtered-repos.service';
import { environment } from 'src/environments/environment';
import { Languages } from 'src/app/types/languages-interface';
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
  languagesFiltered!: Languages[];
  repositoryObservable!: Observable<Languages[]>;

  constructor(
    private _getApiService: GetApiGithubService,
    private _router: Router,
    private _filteredRepos: FilteredReposService
  ) {}

  ngOnInit() {
    this._getApiService.getRepositories();

    this.repositories = this._getApiService.repositoreSubject;

    this._filteredRepos.filteredData(this.repositories);

    this.filteredResult = this._filteredRepos.filteredResult;
    this._filteredRepos.languagesSubject.subscribe((data) => {
      console.log(data);
    });

    // this.languagesFiltered = this._filteredRepos.languages_url;
  }
}
