import {UserBoxComponent} from "../widgets/user-box/user-box.component";
import {TasksBoxComponent} from "../widgets/tasks-box/tasks-box.component";
import {NotificationBoxComponent} from "../widgets/notification-box/notification-box.component";
import {AuthService} from "../services/auth.service";
import {AdminLTETranslateService} from "../services/translate.service";
import {NgModule} from "@angular/core/src/metadata/ng_module";
import {MessagesBoxComponent} from "../widgets/messages-box/messages-box.component";
import {MessagesService} from "../services/messages.service";
import {NotificationService} from "../services/notification.service";
import {MenuAsideComponent} from "../widgets/menu-aside/menu-aside.component";
import {BreadcrumbService} from "../services/breadcrumb.service";
import {CanActivateGuard} from "../services/guard.service";
import {LoggerService} from "../services/logger.service";
import {PagesRoutingModule} from "./pages-routing.module";
import {WelcomeComponent} from "./welcome/welcome.component";
import {AppFooterComponent} from "../widgets/app-footer/app-footer.component";
import {UserService} from "../services/user.service";
import {AppHeaderComponent} from "../widgets/app-header/app-header.component";
import {BreadcrumbComponent} from "../widgets/breadcrumb/breadcrumb.component";
import {TranslateLoader, TranslateModule, TranslateStaticLoader} from "ng2-translate";
import {ToasterModule} from "angular2-toaster";
import {Http, HttpModule} from "@angular/http";
import {environment} from "../../environments/environment";
import {AngularFireModule} from "angularfire2";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {DatepickerModule, ModalModule, AlertModule} from "ng2-bootstrap";
import {HomeComponent} from "./home.component";

export function createTranslateLoader( http: Http ) {
    return new TranslateStaticLoader( http, '../../public/assets/i18n', '.json' );
}

let modules = [
    AlertModule,
    ModalModule,
    DatepickerModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    AngularFireModule.initializeApp( environment.firebase ),
    TranslateModule.forRoot({
        deps: [Http],
        provide: TranslateLoader,
        useFactory: (createTranslateLoader)
    }),
    ToasterModule
];

let widgets = [
    BreadcrumbComponent,
    AppHeaderComponent,
    AppFooterComponent,
    MenuAsideComponent,
    MessagesBoxComponent,
    NotificationBoxComponent,
    TasksBoxComponent,
    UserBoxComponent
];

let services = [
    UserService,
    BreadcrumbService,
    MessagesService,
    AuthService,
    CanActivateGuard,
    NotificationService,
    AdminLTETranslateService,
    LoggerService
];

let pages = [
    WelcomeComponent
];

@NgModule({
    imports: [
        PagesRoutingModule,
        ...modules
    ],
    declarations: [
        HomeComponent,
        ...pages,
        ...widgets
    ],
    providers: [
        ...services
    ]
})
export class PagesModule {
}