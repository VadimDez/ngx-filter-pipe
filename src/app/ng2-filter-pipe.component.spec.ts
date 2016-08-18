import {
  inject,
  TestBed
} from '@angular/core/testing';
import { Ng2FilterPipeAppComponent } from '../app/ng2-filter-pipe.component';

beforeEach(() => {
  TestBed.configureTestingModule({
    providers: [Ng2FilterPipeAppComponent]
  });
});


describe('App: Ng2FilterPipe', () => {
  it('should create the app',
      inject([Ng2FilterPipeAppComponent], (app: Ng2FilterPipeAppComponent) => {
    expect(app).toBeTruthy();
  }));

  // it('should have as title \'ng2-filter-pipe works!\'',
  //     inject([Ng2FilterPipeAppComponent], (app: Ng2FilterPipeAppComponent) => {
  //   expect(app.title).toEqual('ng2-filter-pipe');
  // }));
});
