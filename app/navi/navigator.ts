import {Component, ContentChild, Directive, Input} from '@angular/core';
let $ = require('../../bower_components/jquery/dist/jquery.min.js');

@Component({
  selector: 'app',
  template: `
      <!-- Navigation -->
      <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
          <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="index.html">Project Home</a>
          </div>
          <!-- /.navbar-header -->
          
          <div class="navbar-default sidebar" role="navigation">
              <div class="sidebar-nav navbar-collapse" style="height:800px;overflow-y:auto">
                  <ul class="nav" id="side-menu">
                      <li>
                          <a (click)="menuClick('chapter3')">Chapter3<span class="fa arrow"></span></a>
                          <ul class="nav nav-second-level" id="chapter3_subul" style="display:none">
                              <li><a [routerLink]="['/component-one']">Component1</a></li>
                              <li><a [routerLink]="['/component-two']">Component2</a></li>
                          </ul>
                      </li>
                      <li>
                          <a (click)="menuClick('chapter4')">Chapter4<span class="fa arrow"></span></a>
                          <ul class="nav nav-second-level" id="chapter4_subul" style="display:none">
                              <li><a [routerLink]="['/hello1']">hello1</a></li>
                              <li><a [routerLink]="['/hello2']">hello2</a></li>
                              <li><a [routerLink]="['/nested-parent']">중첩노드</a></li>
                              <li><a [routerLink]="['/parent-to-child-input']">자식노드 전달하기</a></li>
                              <li><a [routerLink]="['/app-root']">EventEmitter</a></li>
                              <li><a [routerLink]="['/app-view-child']">ViewChild 장식자 활용</a></li>
                              <li><a [routerLink]="['/some-cmp']">ViewChildren 장식자 활용</a></li>
                              <li><a [routerLink]="['/app-contentchild']">그룹버튼</a></li>
                              <li><a [routerLink]="['/example-app']">ContentChidren 그룹값</a></li>
                              <li><a [routerLink]="['/example-app']">컴포넌트스타일</a></li>
                              <li><a [routerLink]="['/component-styles']">컴포넌트스타일 연습</a></li>
                              <li><a [routerLink]="['/hello']">Hello 서비스</a></li>
                              <li><a [routerLink]="['/oop-cmp']">객체지향서비스</a></li>
                              <li><a [routerLink]="['/mock-test']">목 객체 서비스</a></li>
                              <li><a [routerLink]="['/promise']">프로미스 서비스</a></li>
                              <li><a [routerLink]="['/parent-component']">서비스를 통한 데이터 교환</a></li>
                        </ul>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
      
      <div id="page-wrapper" style="height:800px;">
          <div class="row">
              <router-outlet></router-outlet>
          </div>
      </div>
  `
})
export class AppComponent { 
    ngAfterViewInit() {
        console.log("ngAfterViewInit....");
        
        $( document ).ready(function(){
            console.log("Ready!");
        });
    }
    
    menuClick( menuSubId ) {
        var menuSubObj = $("#" + menuSubId + "_subul");
        if ( $( menuSubObj ).css("display") == "block" ) {
            $( menuSubObj ).hide();
        } else {
            $( menuSubObj ).show();
        }
    }
}