import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FilterPipeModule } from './shared';
import { MDL } from './shared/mdl';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FilterPipeModule
  ],
  declarations: [
    AppComponent,
    MDL
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
