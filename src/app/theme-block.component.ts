import { Component, Input } from '@angular/core';
import { Theme } from './theme';

@Component({
  selector: 'app-theme-block',
  template: `
  <div class="block-lg" [style.backgroundColor]="primary">
    <div class="block-sm" [style.backgroundColor]="accent"></div>
  </div>
  `,
  styles: [
    `
      :host {
        cursor: pointer;
        display: block;
        box-shadow: 1px 0 1px 1px rgba(0, 0, 0, 0.2);
      }

      .block-lg {
        width: 50px;
        height: 50px;
        position: relative;
      }

      .block-sm {
        width: 20px;
        height: 20px;
        position: absolute;
        right: 0;
        bottom: 0;
      }
    `
  ]
})
export class ThemeBlockComponent {
  @Input() theme: Theme;

  get primary() {
    return this.theme.primary;
  }

  get accent() {
    return this.theme.accent;
  }
}
