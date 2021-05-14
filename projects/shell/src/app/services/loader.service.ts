import { Compiler, Injectable, InjectFlags, Injector, NgModuleRef } from '@angular/core';
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

    async load<T>(plugin: PluginOptions): Promise<void> {
        try {
            const module = await this.loadModule<T>(plugin);
            this.concatRouting<T>(module);
        } catch (e) {
            console.log('cannot load feature module ' + plugin.remoteName);
        }
    }

    private async loadModule<T>(plugin: PluginOptions): Promise<NgModuleRef<T>> {
        const remoteModule = await loadRemoteModule(plugin);
        const factory = await this.compiler.compileModuleAsync<T>(remoteModule[plugin.moduleName]);
        return factory.create(this.injector);
    }

    private concatRouting<T>(module: NgModuleRef<T>): void {
        // tslint:disable-next-line:no-bitwise
        const routes: Route[][] = module.injector.get(ROUTES, undefined, InjectFlags.Self | InjectFlags.Optional);
        const config = this.router.config;
        this.router.resetConfig(config.concat(...routes));
    }
}
