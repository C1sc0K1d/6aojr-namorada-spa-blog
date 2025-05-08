import { TestBed } from '@angular/core/testing';

import { CoisasService } from './coisas.service';

describe('CoisasService', () => {
  let service: CoisasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoisasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
