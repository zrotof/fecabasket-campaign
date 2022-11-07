import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramShortComponent } from './program-short.component';

describe('ProgramShortComponent', () => {
  let component: ProgramShortComponent;
  let fixture: ComponentFixture<ProgramShortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramShortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
