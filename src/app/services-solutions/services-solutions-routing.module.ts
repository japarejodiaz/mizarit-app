import { NgModule } from '@angular/core';
import {RouterModule, Routes, ROUTES} from "@angular/router";
import {CloudServicesComponent} from "./pages/cloud-services/cloud-services.component";
import {DatabaseServicesComponent} from "./pages/database-services/database-services.component";
import {DesignServicesComponent} from "./pages/design-services/design-services.component";
import {HomeComponent} from "../pages/home/home.component";
import {DevelopmentQualityComponent} from "./pages/development-quality/development-quality.component";
import {DevopsServicesComponent} from "./pages/devops-services/devops-services.component";
import {AgileMetodologyComponent} from "./pages/agile-metodology/agile-metodology.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'cloud-services',
        component: CloudServicesComponent
      },
      {
        path: 'database-services',
        component: DatabaseServicesComponent
      },
      {
        path: 'agile-metodology',
        component: AgileMetodologyComponent
      },
      {
        path: 'development-quality',
        component: DevelopmentQualityComponent
      },
      {
        path: 'devops-services',
        component: DevopsServicesComponent
      },
      {
        path: "**", redirectTo: "cloud-services"
      }

    ]
  }


]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class ServicesSolutionsRoutingModule { }
