import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarComponent } from './bar.component';

const routes: Routes = [{
    path: 'bar',
    component: BarComponent,
    pathMatch: 'full',
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BarRoutingModule {
}
