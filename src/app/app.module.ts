import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ViewBeersComponent } from './components/view-beers/view-beers.component';
import { FilterBeersComponent } from './components/filter-beers/filter-beers.component';
import { SearchBeersComponent } from './components/filter-beers/search-beers/search-beers.component';
import { RandomBeerComponent } from './components/filter-beers/random-beer/random-beer.component';
import { BeersCarouselComponent } from './components/view-beers/beers-carousel/beers-carousel.component';
import { BeersListComponent } from './components/view-beers/beers-list/beers-list.component';
import { SingleBeerComponent } from './components/view-beers/single-beer/single-beer.component';
import { SingleBeerFrontComponent } from './components/view-beers/single-beer/single-beer-front/single-beer-front.component';
import { SingleBeerBackComponent } from './components/view-beers/single-beer/single-beer-back/single-beer-back.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ViewBeersComponent,
    FilterBeersComponent,
    SearchBeersComponent,
    RandomBeerComponent,
    BeersCarouselComponent,
    BeersListComponent,
    SingleBeerComponent,
    SingleBeerFrontComponent,
    SingleBeerBackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
