import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
// import { Ng2FilterPipe } from './shared/ng2-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    // Ng2FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2FilterPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
