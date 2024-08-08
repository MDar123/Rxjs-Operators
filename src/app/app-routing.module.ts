import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromisesComponent } from './Includes/promises/promises.component';
import { ObservablesComponent } from './Includes/observables/observables.component';
import { ListComponent } from './Includes/observables/list/list.component';
import { FormEventComponent } from './Includes/observables/form-event/form-event.component';

export const routes: Routes = [
  {path:'promises',component:PromisesComponent},
  {path:"observable",component:ObservablesComponent,children:[
    {path:"",component:ListComponent},
    {path:"",component:ListComponent},
    {path:"fromEvent",component:FormEventComponent}
  ]},
  {path:'**',component:PromisesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
