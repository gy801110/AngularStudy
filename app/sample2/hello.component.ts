import { Component } from '@angular/core';

@Component({
    selector: 'app-hello',
    //template: '<h1>{{title}}</h1><input type="text" [(ngModel)]="title"><textarea [(ngModel)]="title"></textarea>',
    template: '<h1>Hello Angular2 Test2</h1>',
    styles : ['input,textarea{margin-top:20px;display:block;}']
})

export class HelloComponent {
  title = 'Hello Component';  
}