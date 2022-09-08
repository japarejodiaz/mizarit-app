import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { AboutUsComponent } from './pages/about-us/about-us.component';
import {HomeComponent} from "./pages/home/home.component";
import {ServicesSolutionsComponent} from "./pages/services-solutions/services-solutions.component";


const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "services-solutions", component: ServicesSolutionsComponent },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
