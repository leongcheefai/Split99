import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitAmountComponent } from './split-amount.component';

describe('SplitAmountComponent', () => {
  let component: SplitAmountComponent;
  let fixture: ComponentFixture<SplitAmountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplitAmountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
