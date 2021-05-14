import { Injectable } from '@angular/core';
import { PluginOptions } from '../models/plugin-options';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class LookupService {
    constructor(
        private http: HttpClient,
    ) {}

    lookup(): Observable<PluginOptions[]> {
        return this.http.get(environment.plugins).pipe(
            map((res: any) => res as PluginOptions[]),
        );
    }
}
