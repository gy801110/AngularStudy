import { Component } from '@angular/core';

@Component({
  selector: 'app-top',
  template: `
      <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="index.html">Project Home</a>
      </div>
  `
})
export class AppTopComponent { 
}