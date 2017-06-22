/**
 * Created by vadimdez on 28/11/2016.
 */
import { NgModule } from '@angular/core';
import { FilterPipe } from './ngx-filter.pipe';

@NgModule({
  declarations: [FilterPipe],
  exports: [FilterPipe]
})

export class FilterPipeModule {}
