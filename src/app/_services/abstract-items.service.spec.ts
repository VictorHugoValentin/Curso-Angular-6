/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AbstractItemsService } from './abstract-items.service';

describe('AbstractItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AbstractItemsService]
    });
  });

  it('should ...', inject([AbstractItemsService], (service: AbstractItemsService) => {
    expect(service).toBeTruthy();
  }));
});
