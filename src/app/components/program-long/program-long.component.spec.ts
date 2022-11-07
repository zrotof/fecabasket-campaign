import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramLongComponent } from './program-long.component';

describe('ProgramLongComponent', () => {
  let component: ProgramLongComponent;
  let fixture: ComponentFixture<ProgramLongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramLongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramLongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
