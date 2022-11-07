import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeMemberDetailsComponent } from './office-member-details.component';

describe('OfficeMemberDetailsComponent', () => {
  let component: OfficeMemberDetailsComponent;
  let fixture: ComponentFixture<OfficeMemberDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeMemberDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeMemberDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
