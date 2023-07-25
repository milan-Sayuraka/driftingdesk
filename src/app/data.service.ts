import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';
import { retry, catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environment';
import { WeatherInterF } from './interfaces/weather-inter-f';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private  BASE_URL = environment.apiUrl;
  apiKey = '7a521b1ff6285fe7eabed9cc90b77148'; 

  constructor(private httpClient : HttpClient) { }
  

  getWeatherData(lat : any, lon: any): Observable<any> {
    return this.httpClient.get<WeatherInterF>(`${this.BASE_URL}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}` ).pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
