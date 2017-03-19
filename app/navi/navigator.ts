import {Component} from '@angular/core';

@Component({
  selector: 'app',
  template: `
      <div class="col-sm-3 col-md-2 sidebar">
          <ul class="nav nav-sidebar">
              <li><a [routerLink]="['/component-one']">Component1</a></li>
              <li><a [routerLink]="['/component-two']">Component2</a></li>
              <li><a [routerLink]="['/hello1']">hello1</a></li>
              <li><a [routerLink]="['/hello2']">hello2</a></li>
              <li><a [routerLink]="['/nested-parent']">중첩노드</a></li>
              <li><a [routerLink]="['/parent-to-child-input']">자식노드 전달하기</a></li>
              <li><a [routerLink]="['/app-root']">EventEmitter</a></li>
              <li><a [routerLink]="['/app-view-child']">ViewChild 장식자 활용</a></li>
          </ul>
      </div>
      <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <router-outlet></router-outlet>
      </div>
  `
})
export class AppComponent { }