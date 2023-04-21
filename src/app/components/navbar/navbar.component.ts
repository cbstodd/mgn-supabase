import { Component } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    logoIcon: string;

    constructor() {
        this.logoIcon = `far fa-gift fa-lg`;
    }


}
