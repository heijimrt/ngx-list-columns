import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxListColumnsModule } from 'projects/ngx-list-columns/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxListColumnsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
