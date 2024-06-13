import { Component } from '@angular/core';

import '@shoelace-style/shoelace/dist/shoelace.js';
import '../../node_modules/@odevo/ui/src/index';

@Component({
  selector: 'app-root',
  template: `<div id="page">
    <h1>Angular</h1>

    <odv-button (click)="click($event)"></odv-button>
  </div>`,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'client';

  click(event: MouseEvent) {
    document.getElementsByTagName('html')[0].classList.add('rittner');
  }
}
