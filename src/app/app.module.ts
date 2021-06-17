import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MyRouteRoutes } from './my-route.routing';
import { FormsModule } from '@angular/forms';
import { CarouselComponent } from './components/home-page/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MyRouteRoutes,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
