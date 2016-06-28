import { Component } from '@angular/core';
import { Ng2FilterPipe } from './shared/ng2-filter.pipe';

@Component({
  moduleId: module.id,
  selector: 'ng2-filter-pipe-app',
  templateUrl: 'ng2-filter-pipe.component.html',
  styleUrls: ['ng2-filter-pipe.component.css'],
  pipes: [Ng2FilterPipe]
})

export class Ng2FilterPipeAppComponent {
  title = 'ng2-filter-pipe works!';

  data = [
    {
      test: 'value'
    },
    {
      test: 'value1'
    },
    {
      test: 'value2'
    },
    {
      test: 'value3'
    }
  ];
}
