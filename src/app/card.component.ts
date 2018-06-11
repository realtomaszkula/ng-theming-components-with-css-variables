import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
  <header></header>
  <main>
    <section class="top"></section>
    <button class="fab">+</button>
    <section class="bottom"></section>
  </main>
  `,
  styles: [
    `
      :host {
        display: block;
        box-shadow: 1px 0 2px 2px rgba(0, 0, 0, 0.2);
        background-color: rgba(0, 0, 0, 0.05);
        width: 300px;
      }

      header {
        background-color: var(--primary);
        height: 75px;
      }

      .top,
      .bottom {
        height: 200px;
      }

      .top {
        background-color: rgba(0, 0, 0, 0.05);
      }

      main {
        position: relative;
      }

      .fab {
        border: 0;
        background-color: var(--accent);
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        position: absolute;
        font-size: 2rem;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        top: 50%;
        transform: translateY(-50%);
        right: 10%;
      }
    `
  ]
})
export class CardComponent {}
