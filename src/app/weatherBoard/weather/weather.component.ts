import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Subject, Observable  } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  addWeather!: FormGroup
  isFormSubmitted = false
  watherData: any;
  private ngUnsubscribe = new Subject<void>();

  constructor(private fb: FormBuilder, private service : DataService) {
    this.addWeather = this.fb.group({
      lat: ['', Validators.required],
      lon: ['', Validators.required]
    })
  }

  submitForm(){
    this.isFormSubmitted = true
    const lat = this.addWeather.value.lat
    const lon = this.addWeather.value.lon
    if(this.addWeather.valid){
      this.service.getWeatherData(lat, lon).pipe(takeUntil(this.ngUnsubscribe))
      .subscribe({
        next: response => {
          this.watherData = response.weather
          this.addWeather.reset();
          console.log('response data', this.watherData)
        },
        error: err => {
          console.log('response error', err)
        }
      })
    }
    
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  

}
