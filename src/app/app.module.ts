import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './parts/header/header.component';
import { HeaderService } from './parts/header/header.service';
import { TopMenuComponent } from './parts/header/top-menu/top-menu.component';
import { HeaderBannerComponent } from './parts/header/header-banner/header-banner.component';
import { TopMenuService } from './parts/header/top-menu/top-menu.service';
import { HeaderBannerService } from './parts/header/header-banner/header.service';
import { CreditOppertunitiesBlockComponent } from './parts/blocks/credit-oppertunities-block/credit-oppertunities-block.component';
import { CreditOppertunitiesBlockService } from './parts/blocks/credit-oppertunities-block/credit-oppertunities-block.service';
import { CreditCardItemBlockComponent } from './parts/blocks/credit-card-item-block/credit-card-item-block.component';
import { CreditCardItemBlockService } from './parts/blocks/credit-card-item-block/credit-card-item-block.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    TopMenuComponent,
    HeaderBannerComponent,
    CreditOppertunitiesBlockComponent,
    CreditCardItemBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    HeaderService,
    TopMenuService,
    HeaderBannerService,
    CreditOppertunitiesBlockService,
    CreditCardItemBlockService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    HeaderComponent, 
    TopMenuComponent, 
    HeaderBannerComponent,
    CreditOppertunitiesBlockComponent,
    CreditCardItemBlockComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
