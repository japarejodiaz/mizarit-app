import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesSolutionsComponent } from './pages/services-solutions/services-solutions.component';
import { CloudServicesComponent } from './pages/services-solutions/cloud-services/cloud-services.component';
import { DevelopmentQualityComponent } from './pages/services-solutions/development-quality/development-quality.component';
import { DatabaseServicesComponent } from './pages/services-solutions/database-services/database-services.component';
import {InfoPageHomeService} from "./services/info-page-home.service";
import {RouterLinkWithHref, RouterOutlet} from "@angular/router";


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    AboutUsComponent,
    HomeComponent,
    ServicesSolutionsComponent,
    CloudServicesComponent,
    DevelopmentQualityComponent,
    DatabaseServicesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterOutlet,
    RouterLinkWithHref
  ],
  providers: [
    InfoPageHomeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
