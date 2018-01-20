import { TestBed, inject } from '@angular/core/testing';

import { EnvsetService } from './envset.service';

describe('EnvsetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnvsetService]
    });
  });

  it('should be created', inject([EnvsetService], (service: EnvsetService) => {
    expect(service).toBeTruthy();
  }));
});
