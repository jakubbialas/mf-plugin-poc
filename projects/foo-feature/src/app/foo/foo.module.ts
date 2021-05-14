import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooRoutingModule } from './foo-routing.module';
import { FooComponent } from './foo.component';
import { MenuLibModule, MenuService } from 'menu-lib';


@NgModule({
    declarations: [
        FooComponent
    ],
    imports: [
        CommonModule,
        FooRoutingModule,
        MenuLibModule,
    ]
})
export class FooModule {
    constructor(menuService: MenuService) {
        menuService.registerItem('foo', {
            name: 'Foo',
            route: ['foo'],
        });
    }
}
