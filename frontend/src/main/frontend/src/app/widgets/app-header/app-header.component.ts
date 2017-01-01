import {Component} from '@angular/core';
import {ModalDirective} from "ng2-bootstrap";
import {ViewChild} from "@angular/core/src/metadata/di";
import {AuthService} from "../../services/auth.service";

@Component( {
    selector: 'app-header',
    styleUrls: ['./app-header.component.css'],
    templateUrl: './app-header.component.html'
})
export class AppHeaderComponent {

    constructor( private auth: AuthService ) {
        // TODO
    }
}
