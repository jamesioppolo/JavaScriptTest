import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { PopoverModule } from 'ngx-bootstrap/popover';

import { SearchComponent } from 'app/Components/SearchComponent';
import { SonnetService } from './Services/SonnetService';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PopoverModule.forRoot()
  ],
  providers: [
    SonnetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
