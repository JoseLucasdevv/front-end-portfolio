import { TestBed } from '@angular/core/testing';

import { GetApiGithubService } from './get-api-github.service';

describe('GetApiGithubService', () => {
  let service: GetApiGithubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetApiGithubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
