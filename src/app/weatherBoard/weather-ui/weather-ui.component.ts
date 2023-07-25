import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-ui',
  templateUrl: './weather-ui.component.html',
  styleUrls: ['./weather-ui.component.css']
})
export class WeatherUIComponent {
  weatherData : any
  weatherClass : String = ''
  weatherimage : String = ''
  @Input() weatherUIData: any; 
baseURL : String = 'https://openweathermap.org/img/wn/'
  constructor () {

  }

  ngOnChanges() {
    if (this.weatherUIData[0]?.main === 'Clear') {
      this.weatherimage = 'weather-sunny';
    } else if (this.weatherUIData[0]?.main === 'Clouds') {
      this.weatherClass = 'weather-cloudy';
    } else if (this.weatherUIData[0]?.main === 'Rain') {
      this.weatherClass = 'weather-rainy';
    } else {
      this.weatherClass = ''; // Add default class here
    }
  }
  

}
