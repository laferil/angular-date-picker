import { TestBed } from '@angular/core/testing';

import { DaterangepickerConfig } from './angular-date-picker.service';

describe('DaterangepickerService', () => {
  let service: DaterangepickerConfig;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DaterangepickerConfig);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
