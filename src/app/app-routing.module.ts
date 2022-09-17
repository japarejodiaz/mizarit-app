import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";


const routes: Routes = [
  {
    path: 'services-solutions',
    loadChildren: ()=> import('./services-solutions/services-solutions.module').then(m => m.ServicesSolutionsModule)
  },
  { path: "home", component: HomeComponent },
  /*{ path: "**", pathMatch: "full", redirectTo: "home" }*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
