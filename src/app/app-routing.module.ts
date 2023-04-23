import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppService } from './services/app.service';

const appRoutes: Routes = [
    { path: '', component: DashboardComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule
    ],
    providers: [
        AppService
    ]
})
export class AppRoutingModule {}
