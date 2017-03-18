import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms'; //ngModel binding

import { HelloAngularComponent }   from './sample1/helloAngular';
import { HelloComponent }          from './sample2/hello.component';

@NgModule({
  imports:      [ BrowserModule,
                  CommonModule,
                  FormsModule ],
  declarations: [ HelloAngularComponent, HelloComponent ],
  bootstrap:    [ HelloAngularComponent ]
})

export class AppModule { }