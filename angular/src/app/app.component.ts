import { Component } from '@angular/core';

import '../../node_modules/@odevo/ui/src/index';

@Component({
  selector: 'app-root',
  template: `<div id="page">
    <h1>Angular</h1>
    <odv-button></odv-button>
  </div>`,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'client';
}
