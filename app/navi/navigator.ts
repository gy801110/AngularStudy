import {Component, ContentChild, Directive, Input} from '@angular/core';
let $ = require('../../bower_components/jquery/dist/jquery.min.js');

@Component({
  selector: 'app',
  template: `
      <!-- Navigation -->
      <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
          <app-top></app-top>
          
          <div class="navbar-default sidebar" role="navigation">
              <div class="sidebar-nav navbar-collapse" style="height:800px;overflow-y:auto">
                  <ul class="nav" id="side-menu">
                      <li>
                          <a (click)="menuClick('chapter3')">Chapter3.타입스크립트<span class="fa arrow"></span></a>
                          <ul class="nav nav-second-level" id="chapter3_subul" style="display:none">
                              <li><a [routerLink]="appUrl">{{appTitle}}</a></li>
                              <li><a [routerLink]="['/component-two']">Component2</a></li>
                          </ul>
                      </li>
                      <li>
                          <a (click)="menuClick('chapter4')">Chapter4.컴포넌트<span class="fa arrow"></span></a>
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
                          </ul>
                      </li>
                      <li>
                          <a (click)="menuClick('chapter5')">Chapter5.서비스<span class="fa arrow"></span></a>
                          <ul class="nav nav-second-level" id="chapter5_subul" style="display:none">
                              <li><a [routerLink]="['/hello']">Hello 서비스</a></li>
                              <li><a [routerLink]="['/oop-cmp']">객체지향서비스</a></li>
                              <li><a [routerLink]="['/mock-test']">목 객체 서비스</a></li>
                              <li><a [routerLink]="['/promise']">프로미스 서비스</a></li>
                              <li><a [routerLink]="['/parent-component']">서비스를 통한 데이터 교환</a></li>
                          </ul>
                      </li>
                      <li>
                          <a (click)="menuClick('chapter6')">Chapter6.모듈<span class="fa arrow"></span></a>
                          <ul class="nav nav-second-level" id="chapter6_subul" style="display:none">
                              <li><a [routerLink]="['/core-test']">핵심모듈</a></li>
                              <li><a [routerLink]="['/member-list']">특정모듈</a></li>
                          </ul>
                      </li>
                      <li>
                          <a (click)="menuClick('chapter7')">Chapter7.라우터<span class="fa arrow"></span></a>
                          <ul class="nav nav-second-level" id="chapter7_subul" style="display:none">
                              <li><a [routerLink]="['/member']">라우터모듈</a></li>
                              <li><a [routerLink]="['/children']">가드(아래 메뉴의 부수적 메뉴)</a></li>
                              <li><a routerLink="/href-test" routerLinkActive="active"  [routerLinkActiveOptions]="{exact: true}">href 속성으로 어플리케이션 로딩</a></li>
                              <li><a routerLink="/router-link-test" routerLinkActive="active"  [routerLinkActiveOptions]="{exact: true}">라우터 링크 테스트</a></li>
                              <li><a routerLink="/!@#" routerLinkActive="active"  [routerLinkActiveOptions]="{exact: true}">요청 페이지 없음</a></li>
                              <li><a routerLink="/hello" routerLinkActive="active"  [routerLinkActiveOptions]="{exact: true}">hello 컴포넌트</a></li>
                              <li><a routerLink="/member" routerLinkActive="active"  [routerLinkActiveOptions]="{exact: true}">forChild 이용한 라우팅 (member컴포넌트)</a></li>
                              <li><a routerLink="/children" routerLinkActive="active"  [routerLinkActiveOptions]="{exact: true}">자식 라우터</a></li>
                              <li><a routerLink="/children/1" routerLinkActive="active"  [routerLinkActiveOptions]="{exact: true}">자식 라우팅시 id가 존재함</a></li>
                              <li><a routerLink="/children/5" routerLinkActive="active"  [routerLinkActiveOptions]="{exact: true}">자식 라우팅시 id가 없음</a></li>
                              <li><a routerLink="/login" routerLinkActive="active"  [routerLinkActiveOptions]="{exact: true}">[로그인 진행 테스트]로그인 페이지</a></li>
                              <li><a routerLink="/admin" routerLinkActive="active"  [routerLinkActiveOptions]="{exact: true}">[로그인 진행 테스트]운영자 페이지</a></li>
                              <li><a routerLink="/lazy/player" routerLinkActive="active"  [routerLinkActiveOptions]="{exact: true}">[로그인 후 접근]loadChildren 사용시 caenLoad가드 적용</a></li>
                              <li><a routerLink="/active" routerLinkActive="active"  [routerLinkActiveOptions]="{exact: true}">[로그인 후 접근]/active</a></li>
                              <li><a routerLink="/active/child1" routerLinkActive="active"  [routerLinkActiveOptions]="{exact: true}">[로그인 후 접근]/active/child1</a></li>
                              <li><a routerLink="/active/child2" routerLinkActive="active"  [routerLinkActiveOptions]="{exact: true}">[로그인 후 접근]/active/child2</a></li>
                          </ul>
                      </li>
                      <li>
                          <a (click)="menuClick('chapter8')">Chapter8.제공자<span class="fa arrow"></span></a>
                          <ul class="nav nav-second-level" id="chapter8_subul" style="display:none">
                              <li><a [routerLink]="['/app-value-provider']">값 제공자</a></li>
                              <li><a [routerLink]="['/app-factory-provider']">팩토리 제공자</a></li>
                              <li><a [routerLink]="['/app-class-provider']">클래스 제공자1</a></li>
                              <li><a [routerLink]="['/app-aliased-class-provider']">클래스 제공자2</a></li>
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
    @Input() appTitle:string = "Component1";
    @Input() appUrl:string = "/component-one";
    
    ngAfterViewInit() {
        $( document ).ready(function(){
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