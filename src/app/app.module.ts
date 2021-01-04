import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeerPropSliderComponent } from './components/filter-beers/beer-prop-slider/beer-prop-slider.component';
import { FilterBeersComponent } from './components/filter-beers/filter-beers.component';
import { RandomBeerComponent } from './components/filter-beers/random-beer/random-beer.component';
import { SearchBeersComponent } from './components/filter-beers/search-beers/search-beers.component';
import { HeaderComponent } from './components/header/header.component';
import { BeersCarouselComponent } from './components/view-beers/beers-carousel/beers-carousel.component';
import { BeersListComponent } from './components/view-beers/beers-list/beers-list.component';
import { SingleBeerBackComponent } from './components/view-beers/single-beer/single-beer-back/single-beer-back.component';
import { SingleBeerFrontComponent } from './components/view-beers/single-beer/single-beer-front/single-beer-front.component';
import { SingleBeerComponent } from './components/view-beers/single-beer/single-beer.component';
import { ViewBeersComponent } from './components/view-beers/view-beers.component';
import { TranslocoRootModule } from './transloco/transloco-root.module';

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
    SingleBeerBackComponent,
    BeerPropSliderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    TranslocoRootModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
