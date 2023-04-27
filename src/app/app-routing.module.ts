import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './app-components/dashboard/dashboard.component';
import { AppService } from './app-services/app.service';
import { CommonModule } from '@angular/common';
import { MyGiftsModule } from './my-gift/my-gifts.module';

const appRoutes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'my-gift', loadChildren: () => MyGiftsModule },


];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
        CommonModule,
    ],
    exports: [
        RouterModule
    ],
    providers: [
        AppService
    ]
})
export class AppRoutingModule {}
