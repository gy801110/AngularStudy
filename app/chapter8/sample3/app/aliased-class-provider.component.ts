import { Component } from '@angular/core';
import { SuperPowerEngine as spEngine } from './super-power-engine.service';
import { Engine } from './engine.service';

@Component( {
    selector: 'app-aliased-class-provider',
    template: `
  {{engine.name}}<br>
  {{spEngine.name}}<br>
  {{result}}`,
    providers: [spEngine, { provide: Engine, useExisting: spEngine }]
})
export class AliasedClassProviderComponent {
    result: string;
    constructor( public engine: Engine, public spEngine: spEngine ) {
        if ( engine === spEngine ) {
            this.result = "두 객체는 동일 객체입니다.";
        } else {
            this.result = "두 객체는 다른 객체입니다.";
            throw new Error( 'Error' );
        }
    }
}