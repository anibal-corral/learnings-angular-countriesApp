import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCountryComponent } from './input-country.component';

describe('InputCountryComponent', () => {
  let component: InputCountryComponent;
  let fixture: ComponentFixture<InputCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
