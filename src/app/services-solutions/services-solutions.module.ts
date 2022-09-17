import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CloudServicesComponent} from './pages/cloud-services/cloud-services.component';
import {DatabaseServicesComponent} from './pages/database-services/database-services.component';
import {DevelopmentQualityComponent} from './pages/development-quality/development-quality.component';
import { DevopsServicesComponent } from './pages/devops-services/devops-services.component';
import { DesignServicesComponent } from './pages/design-services/design-services.component';
import {ServicesSolutionsRoutingModule} from "./services-solutions-routing.module";
import { AgileMetodologyComponent } from './pages/agile-metodology/agile-metodology.component';


@NgModule({
  declarations: [
    CloudServicesComponent,
    DatabaseServicesComponent,
    DevelopmentQualityComponent,
    DevopsServicesComponent,
    DesignServicesComponent,
    AgileMetodologyComponent
  ],
  imports: [
    CommonModule,
    ServicesSolutionsRoutingModule
  ]
})
export class ServicesSolutionsModule {
}
