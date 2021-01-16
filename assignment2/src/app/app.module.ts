import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { CommonModule } from '@angular/common';
import { HighlighterDirective } from './highlighter.directive';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HighlighterDirective,

  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
