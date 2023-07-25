import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './weatherBoard/weather/weather.component';

const routes: Routes = [
  {path: '', redirectTo:'dashboard', pathMatch: 'full'},
  {
    path: 'dashboard',
    component : WeatherComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
