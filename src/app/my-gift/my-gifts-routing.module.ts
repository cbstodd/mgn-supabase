import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyGiftComponent } from './components/my-gift.component';
import { MyGiftListComponent } from './components/my-gift-list/my-gift-list.component';
import { MyGiftDetailsComponent } from './components/my-gift-details/my-gift-details.component';
import { MyGiftEditComponent } from './components/my-gift-edit/my-gift-edit.component';

const myGiftRoutes: Routes = [
    {
        path: 'my-gift', component: MyGiftComponent, children: [
            { path: '', component: MyGiftListComponent },
            { path: ':id', component: MyGiftDetailsComponent },
            { path: 'edit/:id', component: MyGiftEditComponent },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(myGiftRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class MyGiftsRoutingModule {}
