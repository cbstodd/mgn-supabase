import { Component, Input } from '@angular/core';
import { MyGift } from '../my-gift';
import { Timestamp } from 'rxjs';

@Component({
    selector: 'app-my-gift',
    templateUrl: './my-gift.component.html',
    styleUrls: ['./my-gift.component.scss']
})
export class MyGiftComponent {
    @Input() myGift: MyGift;

    pageTitle: string;
    title: string;
    summary: string;
    price: number;
    created_at: Timestamp | number | null;
    updated_at: Timestamp;

    constructor() {
        this.pageTitle = 'My Gifts';
        this.title = '';
        this.summary = '';
        this.price = 0.00;
        this.updated_at = new Date();
        this.created_at = new Date();
    }

}
