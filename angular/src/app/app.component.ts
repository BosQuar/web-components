import { Component } from '@angular/core';

import '../../node_modules/@odevo/ui/src/index';

@Component({
  selector: 'app-root',
  template: `<div id="page">
    <odv-test></odv-test>
  </div>`,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'client';
}