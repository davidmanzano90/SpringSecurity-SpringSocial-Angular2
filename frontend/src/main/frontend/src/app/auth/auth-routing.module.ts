import {Routes, RouterModule} from "@angular/router";
import {LoginPageComponent} from "./login-page/login-page.component";
import {AuthComponent} from "./auth.component";
import {RegisterPageComponent} from "./register-page/register-page.component";
import {ResetpasswordPageComponent} from "./resetpassword-page/resetpassword-page.component";
import {NgModule} from "@angular/core/src/metadata/ng_module";

const authRouters: Routes = [
    {
        path: 'account',
        component: AuthComponent,
        children: [
            {
                component: LoginPageComponent,
                path: 'login'
            },
            {
                component: ResetpasswordPageComponent,
                path: 'reset-password'
            },
            {
                component: RegisterPageComponent,
                path: 'register'
            },
            {
                path: '', redirectTo: 'login', pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(authRouters)
    ],
    exports: [
        RouterModule
    ]
})
export class AuthRoutingModule { }