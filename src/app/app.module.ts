import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { SonnetService } from './Services/SonnetService';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    SonnetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
