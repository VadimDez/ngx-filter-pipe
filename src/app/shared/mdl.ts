/**
 * Created by vadimdez on 15/07/16.
 */
import {Directive, AfterViewInit} from '@angular/core';
declare var componentHandler: any;

@Directive({
  selector: '[mdl]'
})
export class MDL implements AfterViewInit {
  ngAfterViewInit() {
    componentHandler.upgradeAllRegistered();
  }
}