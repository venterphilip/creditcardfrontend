import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCountriesComponent } from './modal-countries.component';

describe('ModalCountriesComponent', () => {
  let component: ModalCountriesComponent;
  let fixture: ComponentFixture<ModalCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCountriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
