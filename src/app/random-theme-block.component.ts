import { Component } from '@angular/core';

@Component({
  selector: 'app-random-theme-block',
  template: `
  <div class="block-lg">
    ?
  </div>
  `,
  styles: [
    `
      :host {
        cursor: pointer;
        display: block;
        box-shadow: 1px 0 1px 1px rgba(0, 0, 0, 0.2);
        color: rgba(0, 0, 0, 0.8);
      }

      .block-lg {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
      }
    `
  ]
})
export class RandomThemeBlockComponent {}
