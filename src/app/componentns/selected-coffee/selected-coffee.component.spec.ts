import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedCoffeeComponent } from './selected-coffee.component';

describe('SelectedCoffeeComponent', () => {
  let component: SelectedCoffeeComponent;
  let fixture: ComponentFixture<SelectedCoffeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedCoffeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedCoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
