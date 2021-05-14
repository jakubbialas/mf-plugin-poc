import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuLibModule } from 'menu-lib';
import { BarModule } from './bar/bar.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MenuLibModule,
        BarModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
