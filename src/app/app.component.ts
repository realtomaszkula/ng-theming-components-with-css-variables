import { Component, HostBinding } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Theme } from './theme';

@Component({
  selector: 'app-root',
  template: `
  <app-card></app-card>

  <section class="theme-buttons">
    <app-theme-block 
       [theme]="indigoPinkTheme" 
       (click)="theme = indigoPinkTheme">
    </app-theme-block>
    <app-theme-block 
       [theme]="pinkBlueGrayTheme" 
       (click)="theme = pinkBlueGrayTheme">
    </app-theme-block>
    <app-theme-block 
       [theme]="deepPurpleAmberTheme"
       (click)="theme = deepPurpleAmberTheme">
    </app-theme-block>
    <app-random-theme-block 
       (click)="theme = randomTheme()">
    </app-random-theme-block>
  </section>
  `,
  styles: [
    `
      app-card {
        margin: 24px auto;
      }

      .theme-buttons {
        display: flex;
        justify-content: space-around;
        align-items: center;
      }

      .content {
        margin: 24px 0;
      }
    `
  ]
})
export class AppComponent {
  readonly indigoPinkTheme: Theme = {
    primary: '#5c6bc0',
    accent: '#ec407a'
  };

  readonly pinkBlueGrayTheme: Theme = {
    primary: '#ec407a',
    accent: '#90a4ae'
  };

  readonly deepPurpleAmberTheme: Theme = {
    primary: '#7e57c2',
    accent: '#ffca28'
  };

  theme: Theme = this.indigoPinkTheme;

  @HostBinding('style')
  get style() {
    return this.sanitizer.bypassSecurityTrustStyle(
      `--primary: ${this.theme.primary}; --accent: ${this.theme.accent}`
    );
  }

  constructor(private sanitizer: DomSanitizer) {}

  randomTheme(): Theme {
    const primary = this.randomHex();
    const accent = this.randomHex();
    return { primary, accent };
  }

  private randomHex() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
}
