import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { Routes, provideRouter, withDebugTracing } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import {
  HttpClientModule,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withDebugTracing()),
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom([
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
        dataEncapsulation: false,
      }),
    ]),
  ],
};
