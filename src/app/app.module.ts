import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CardComponent } from './card.component';
import { ThemeBlockComponent } from './theme-block.component';
import { RandomThemeBlockComponent } from './random-theme-block.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ThemeBlockComponent,
    RandomThemeBlockComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
