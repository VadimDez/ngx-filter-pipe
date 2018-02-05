import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FilterPipeModule } from './shared/ngx-filter-pipe';
import { MDL } from './shared/mdl';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    MDL
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
    FilterPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
