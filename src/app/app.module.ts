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
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PromisesComponent,
    ObservablesComponent,
    ListComponent,
    FormEventComponent
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
