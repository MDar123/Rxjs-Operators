import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromisesComponent } from './Includes/promises/promises.component';
import { ObservablesComponent } from './Includes/observables/observables.component';
import { ListComponent } from './Includes/observables/list/list.component';
import { FormEventComponent } from './Includes/observables/form-event/form-event.component';
import { FilterComponent } from './Includes/observables/filter/filter.component';
import { ConcatAndMergeComponent } from './Includes/observables/concat-and-merge/concat-and-merge.component';
import { DebounceTimeComponent } from './Includes/observables/debounce-time/debounce-time.component';
import { RetryComponent } from './Includes/observables/retry/retry.component';

export const routes: Routes = [
  {path:'promises',component:PromisesComponent},
  {path:"observable",component:ObservablesComponent,children:[
    {path:"",component:ListComponent},
    {path:"",component:ListComponent},
    {path:"fromEvent",component:FormEventComponent},
    {path:"filter",component:FilterComponent},
    {path:"concatAndmerge",component:ConcatAndMergeComponent},
    {path:"debounce",component:DebounceTimeComponent},
    {path:"retry",component:RetryComponent}
  ]},
  {path:'**',component:PromisesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
