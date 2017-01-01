import {AppRoutes} from "./app.routes";
import {PagesModule} from "./pages/pages.module";
import {AuthModule} from "./auth/auth.module";
import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core/src/metadata/ng_module";
import {LandingPageComponent} from "./landing-page/landing-page.component";

@NgModule( {
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        LandingPageComponent
    ],
    imports: [
        AuthModule,
        PagesModule,
        AppRoutes
    ]
})
export class AppModule { }
