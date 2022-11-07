import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniteScrollArgumentComponent } from './infinite-scroll-argument.component';

describe('InfiniteScrollArgumentComponent', () => {
  let component: InfiniteScrollArgumentComponent;
  let fixture: ComponentFixture<InfiniteScrollArgumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfiniteScrollArgumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfiniteScrollArgumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
