import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditcardqueueComponent } from './creditcardqueue.component';

describe('CreditcardqueueComponent', () => {
  let component: CreditcardqueueComponent;
  let fixture: ComponentFixture<CreditcardqueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditcardqueueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditcardqueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
