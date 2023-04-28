import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyGiftComponent } from './components/my-gift.component';
import { MyGiftListComponent } from './components/my-gift-list/my-gift-list.component';
import { MyGiftDetailsComponent } from './components/my-gift-details/my-gift-details.component';
import { MyGiftEditComponent } from './components/my-gift-edit/my-gift-edit.component';
import { CommonModule } from '@angular/common';

const myGiftRoutes: Routes = [
    {
        path: 'my-gift', component: MyGiftComponent, children: [
            { path: '', component: MyGiftListComponent },
            { path: ':id', component: MyGiftDetailsComponent },
            { path: ':id/edit', component: MyGiftEditComponent },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(myGiftRoutes),
        CommonModule,
    ],
    exports: [
        RouterModule
    ]
})
export class MyGiftsRoutingModule {}
