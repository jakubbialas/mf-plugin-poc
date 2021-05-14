import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuLibModule } from 'menu-lib';
import { LookupService } from './services/lookup.service';
import { PluginOptions } from './models/plugin-options';
import { LoaderService } from './services/loader.service';
import { HttpClientModule } from '@angular/common/http';

export function initializeApp(lookupService: LookupService, loaderService: LoaderService): any {
    return async () => {
        const plugins = await lookupService.lookup().toPromise();
        await Promise.all(plugins.map((plugin: PluginOptions) => loaderService.load(plugin)));
    };
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        MenuLibModule,
    ],
    providers: [{
        provide: APP_INITIALIZER,
        useFactory: initializeApp,
        deps: [LookupService, LoaderService],
        multi: true,
    }],
    bootstrap: [
        AppComponent,
    ],
})
export class AppModule {
}
