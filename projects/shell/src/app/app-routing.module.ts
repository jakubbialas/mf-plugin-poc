import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [{
    path: 'foo',
    loadChildren: () =>
        loadRemoteModule({
            remoteEntry: 'http://localhost:4201/remoteEntry.js',
            remoteName: 'foo_feature',
            exposedModule: './Module'
        }).then(m => m.AppModule)
}, {
    path: 'bar',
    loadChildren: () =>
        loadRemoteModule({
            remoteEntry: 'http://localhost:4202/remoteEntry.js',
            remoteName: 'bar_feature',
            exposedModule: './Module'
        }).then(m => m.AppModule)
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
