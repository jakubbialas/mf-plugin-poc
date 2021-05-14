import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItem } from '../../models/menu-item';
import { MenuService } from '../../services/menu.service';

@Component({
    selector: 'lib-menu',
    templateUrl: './menu.component.html',
})
export class MenuComponent {

    public items$: Observable<MenuItem[]>;

    constructor(
        private menuService: MenuService,
    ) {
        this.items$ = this.menuService.getItems();
    }

}
