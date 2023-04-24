import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyGiftsRoutingModule } from './my-gifts-routing.module';
import { MyGiftComponent } from './components/my-gift.component';
import { NewMyGiftComponent } from './components/my-gift-new/new-my-gift.component';
import { EditMyGiftComponent } from './components/my-gift-edit/edit-my-gift.component';
import { MyGiftDetailsComponent } from './components/my-gift-details/my-gift-details.component';
import { MyGiftListComponent } from './components/my-gift-list/my-gift-list.component';


@NgModule({
  declarations: [
    MyGiftComponent,
    NewMyGiftComponent,
    EditMyGiftComponent,
    MyGiftDetailsComponent,
    MyGiftListComponent
  ],
  imports: [
    CommonModule,
    MyGiftsRoutingModule
  ]
})
export class MyGiftsModule { }
