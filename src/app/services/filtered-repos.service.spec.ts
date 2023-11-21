import { TestBed } from '@angular/core/testing';

import { FilteredReposService } from './filtered-repos.service';

describe('FilteredReposService', () => {
  let service: FilteredReposService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilteredReposService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
