import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MfeWrapperComponent, WebComponentWrapperOptions } from '@angular-monorepo/mfe-wrapper';

@Component({
  selector: 'app-horizontal-split',
  standalone: true,
  imports: [CommonModule, MfeWrapperComponent],
  templateUrl: './horizontal-split.component.html',
})
export class HorizontalSplitComponent {

  mfeCard = {
    type: 'module',
    remoteEntry: 'http://localhost:4201/remoteEntry.js',
    remoteName: 'mfe-card',
    exposedModule: './web-components',
    elementName: 'mfe-card'
  } as WebComponentWrapperOptions;

  mfeHeader = {
    type: 'module',
    remoteEntry: 'http://localhost:4202/remoteEntry.js',
    remoteName: 'mfe-header',
    exposedModule: './web-components',
    elementName: 'mfe-header'
  } as WebComponentWrapperOptions;


  mfeFooter = {
    type: 'module',
    remoteEntry: 'http://localhost:4203/remoteEntry.js',
    remoteName: 'mfe-footer',
    exposedModule: './web-components',
    elementName: 'mfe-footer'
  } as WebComponentWrapperOptions;

}
