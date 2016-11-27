/**
 * Created by vadimdez on 15/07/16.
 */
import { Directive, AfterViewChecked } from '@angular/core';
declare var componentHandler: any;

@Directive({
  selector: '[mdl]'
})
export class MDL implements AfterViewChecked {
  ngAfterViewChecked() {
    componentHandler.upgradeAllRegistered();
  }
}