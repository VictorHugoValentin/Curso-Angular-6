/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MockItemsService } from './mock-items.service';

describe('MockItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockItemsService]
    });
  });

  it('should ...', inject([MockItemsService], (service: MockItemsService) => {
    expect(service).toBeTruthy();
  }));
});
