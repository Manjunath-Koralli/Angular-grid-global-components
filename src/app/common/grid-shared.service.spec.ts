import { TestBed } from '@angular/core/testing';

import { GridSharedService } from './grid-shared.service';

describe('GridSharedService', () => {
  let service: GridSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GridSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
