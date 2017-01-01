import { Routes, RouterModule } from '@angular/router';
import {NgModule} from "@angular/core/src/metadata/ng_module";
import {LandingPageComponent} from "./landing-page/landing-page.component";

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  {
    path: 'login',
    loadChildren: "./auth/auth.module#AuthModule"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutes { }
