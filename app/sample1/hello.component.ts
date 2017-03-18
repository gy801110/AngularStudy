import { Component } from '@angular/core';

@Component({
    selector: 'app'
   ,template: `
               <h1>{{title}}</h1>
               <input type="text" [(ngModel)]="title">
               <textarea [(ngModel)]="title"></textarea>
            `
   ,styles : ['input,textarea{margin-top:20px;display:block;}']
})

export class Hello2Component {
  title = 'Hello Component';  
}