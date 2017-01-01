import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core/src/metadata/ng_module";
import {LoginPageComponent} from "./login-page/login-page.component";
import {RegisterPageComponent} from "./register-page/register-page.component";
import {ResetpasswordPageComponent} from "./resetpassword-page/resetpassword-page.component";
import {AuthRoutingModule} from "./auth-routing.module";
import {AuthComponent} from "./auth.component";

@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule
    ],
    declarations: [
        AuthComponent,
        LoginPageComponent,
        RegisterPageComponent,
        ResetpasswordPageComponent
    ]
})
export class AuthModule { }