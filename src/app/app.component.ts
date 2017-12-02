import { Component } from '@angular/core';
import { SonnetService } from 'app/Services/SonnetService';
import { FormsModule }   from '@angular/forms';

import { SonnetModel } from 'app/models/SonnetModel';

import * as _ from 'lodash';    

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  
  title = "Shakespeare's Sonnets";
  searchTerm: string;
  filteredSonnets = new Array<SonnetModel>();

  constructor(private sonnetService: SonnetService)
  {
  }

  performSearch(searchString: string)
  {
    this.filteredSonnets = _.filter(this.sonnetService.sonnets, function(sonnet) {
       return _.some(sonnet.lines, _.method('includes', searchString));
    });
  }

}
