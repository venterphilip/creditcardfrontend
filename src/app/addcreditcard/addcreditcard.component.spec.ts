import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcreditcardComponent } from './addcreditcard.component';

describe('AddcreditcardComponent', () => {
  let component: AddcreditcardComponent;
  let fixture: ComponentFixture<AddcreditcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcreditcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcreditcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
