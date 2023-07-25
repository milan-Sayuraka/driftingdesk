import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherUIComponent } from './weather-ui.component';

describe('WeatherUIComponent', () => {
  let component: WeatherUIComponent;
  let fixture: ComponentFixture<WeatherUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherUIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
