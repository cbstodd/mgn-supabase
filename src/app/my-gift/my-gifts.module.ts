import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyGiftsRoutingModule } from './my-gifts-routing.module';
import { MyGiftComponent } from './components/my-gift.component';
import { NewMyGiftComponent } from './components/my-gift-new/new-my-gift.component';
import { MyGiftDetailsComponent } from './components/my-gift-details/my-gift-details.component';
import { MyGiftListComponent } from './components/my-gift-list/my-gift-list.component';
import { MyGiftEditComponent } from './components/my-gift-edit/my-gift-edit.component';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [
        MyGiftComponent,
        NewMyGiftComponent,
        MyGiftEditComponent,
        MyGiftDetailsComponent,
        MyGiftListComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        MyGiftsRoutingModule,
    ]
})
export class MyGiftsModule {}
