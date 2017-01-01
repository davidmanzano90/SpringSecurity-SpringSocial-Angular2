import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core/src/metadata/ng_module";
import {HomeComponent} from "./home.component";

const pagesRoutes: Routes = [
    {
        path: 'welcome',
        component: HomeComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(pagesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class PagesRoutingModule { }