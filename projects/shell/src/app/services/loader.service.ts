import { Compiler, Injectable, InjectFlags, Injector } from '@angular/core';
import { Route, Router, ROUTES } from '@angular/router';
import { PluginOptions } from '../models/plugin-options';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Injectable({
    providedIn: 'root',
})
export class LoaderService {
    constructor(
        private compiler: Compiler,
        private injector: Injector,
        private router: Router,
    ) {
    }

    async load(plugin: PluginOptions): Promise<void> {
        const remoteModule = await loadRemoteModule(plugin);
        const factory = await this.compiler.compileModuleAsync(remoteModule[plugin.moduleName]);
        const module = factory.create(this.injector);

        // concat module routing:

        // tslint:disable-next-line:no-bitwise
        const routes: Route[][] = module.injector.get(ROUTES, undefined, InjectFlags.Self | InjectFlags.Optional);
        const config = this.router.config;
        this.router.resetConfig(config.concat(...routes));
    }
}
