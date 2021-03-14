import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannedcountriesComponent } from './bannedcountries.component';

describe('BannedcountriesComponent', () => {
  let component: BannedcountriesComponent;
  let fixture: ComponentFixture<BannedcountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannedcountriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannedcountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
