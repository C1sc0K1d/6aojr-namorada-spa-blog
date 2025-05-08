import { TestBed } from '@angular/core/testing';

import { TipoCoisasService } from './tipo-coisas.service';

describe('TipoCoisasService', () => {
  let service: TipoCoisasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoCoisasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
