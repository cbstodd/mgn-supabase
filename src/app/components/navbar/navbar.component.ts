import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    logoIcon: string;
    searchInput: string;
    isLoggedIn: boolean = true;


    constructor(private appService: AppService) {
        this.logoIcon = `far fa-gift fa-lg`;
        this.searchInput = '';
    }


    ngOnInit(): void {
    }

    searchSite($evt: KeyboardEvent): void {
        $evt.preventDefault();
        this.searchInput.concat($evt.key.toString());
        console.log(this.searchInput);
    }


}
