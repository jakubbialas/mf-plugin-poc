import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuLibModule } from 'menu-lib';
import { FooModule } from './foo/foo.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MenuLibModule,
        FooModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
