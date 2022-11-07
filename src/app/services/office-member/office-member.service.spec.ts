import { TestBed } from '@angular/core/testing';

import { OfficeMemberService } from './office-member.service';

describe('OfficeMemberService', () => {
  let service: OfficeMemberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfficeMemberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
