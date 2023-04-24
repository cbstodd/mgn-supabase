import { TestBed } from '@angular/core/testing';

import { MyGiftServiceService } from './my-gift-service.service';

describe('MyGiftServiceService', () => {
  let service: MyGiftServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyGiftServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
