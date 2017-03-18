import {Component} from '@angular/core';

@Component({
  selector: 'app',
  template: `
      <div style="width:250px;display:inline-block;">
          <ul>
              <li><a [routerLink]="['/component-one']">Component1</a></li>
              <li><a [routerLink]="['/component-two']">Component2</a></li>
              <li><a [routerLink]="['/hello1']">hello1</a></li>
              <li><a [routerLink]="['/hello2']">hello2</a></li>
          </ul>
      </div>
      <div style="width:500px;display:inline-block;border:2px solid green;padding: 1rem;">
          <router-outlet></router-outlet>
      </div>
  `
})
export class AppComponent { }