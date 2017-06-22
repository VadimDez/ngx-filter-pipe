import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
// import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { FilterPipeModule } from './shared/ngx-filter.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FilterPipeModule
  ],
  declarations: [
    AppComponent,
    // Ng2FilterPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
