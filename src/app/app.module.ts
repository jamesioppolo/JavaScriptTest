import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { PopoverModule } from 'ngx-bootstrap/popover';

import { SearchComponent } from 'app/Components/SearchComponent';
import { DisplayComponent } from 'app/Components/DisplayComponent';
import { SonnetService } from './Services/SonnetService';
import { SearchService } from 'app/Services/SearchService';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PopoverModule.forRoot()
  ],
  providers: [
    SonnetService,
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
