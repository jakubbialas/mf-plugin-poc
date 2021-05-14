import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarRoutingModule } from './bar-routing.module';
import { BarComponent } from './bar.component';
import { MenuLibModule, MenuService } from 'menu-lib';


@NgModule({
    declarations: [
        BarComponent
    ],
    imports: [
        CommonModule,
        BarRoutingModule,
        MenuLibModule,
    ]
})
export class BarModule {
    constructor(menuService: MenuService) {
        menuService.registerItem('bar', {
            name: 'Bar',
            route: ['bar'],
        });
    }
}
