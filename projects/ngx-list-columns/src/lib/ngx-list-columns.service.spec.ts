import { TestBed, inject } from '@angular/core/testing';

import { NgxListColumnsService } from './ngx-list-columns.service';

describe('NgxListColumnsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxListColumnsService]
    });
  });

  it('should be created', inject([NgxListColumnsService], (service: NgxListColumnsService) => {
    expect(service).toBeTruthy();
  }));
});
