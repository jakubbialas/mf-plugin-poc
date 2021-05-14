import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooComponent } from './foo.component';

const routes: Routes = [{
    path: 'foo',
    component: FooComponent,
    pathMatch: 'full',
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FooRoutingModule {
}
