import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MenuItems } from '../models/menu-items';
import { MenuItem } from '../models/menu-item';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MenuService {

  private items$ = new BehaviorSubject<MenuItems>({});

  getItems(): Observable<MenuItem[]> {
    return this.items$.pipe(
        map((entities) => Object.values(entities)),
    );
  }

  registerItem(id: string, item: MenuItem): void {
    this.items$.next({
      ...this.items$.getValue(),
      [id]: item,
    });
  }
}
