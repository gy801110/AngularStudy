import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
      <li><a [routerLink]="['/component-one']">Component1</a></li>
  `
})
export class AppMenuComponent { 
}