import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './Includes/header/header.component';
import { PromisesComponent } from './Includes/promises/promises.component';
import { ObservablesComponent } from './Includes/observables/observables.component';
import { ListComponent } from './Includes/observables/list/list.component';
import { FormEventComponent } from './Includes/observables/form-event/form-event.component';
import { FilterComponent } from './Includes/observables/filter/filter.component';
import { ConcatAndMergeComponent } from './Includes/observables/concat-and-merge/concat-and-merge.component';
import { DebounceTimeComponent } from './Includes/observables/debounce-time/debounce-time.component';
import { RetryComponent } from './Includes/observables/retry/retry.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PromisesComponent,
    ObservablesComponent,
    ListComponent,
    FormEventComponent,
    FilterComponent,
    ConcatAndMergeComponent,
    DebounceTimeComponent,
    RetryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
