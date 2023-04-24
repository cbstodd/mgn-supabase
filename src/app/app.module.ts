import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './app-components/navbar/navbar.component';
import { SidebarComponent } from './app-components/sidebar/sidebar.component';
import { DashboardComponent } from './app-components/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { BottomOffCanvasComponent } from './app-components/bottom-off-canvas/bottom-off-canvas.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        SidebarComponent,
        DashboardComponent,
        BottomOffCanvasComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
