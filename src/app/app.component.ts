import { Component } from '@angular/core';
import { SonnetService } from 'app/Services/SonnetService';
import { FormsModule }   from '@angular/forms';

import { SonnetModel } from 'app/models/SonnetModel';

import * as _ from 'lodash';    

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styles: [`.title-top-space { padding-top:20px }
    .fa-times-right-adjustment { padding-right:5px }`]
})
export class AppComponent {
    title = "Shakespeare's Sonnets";
    searchTerm: string = '';
    hasPerformedFirstSearch = false;
    filteredSonnets = new Array<SonnetModel>();
    currentlyEditingSonnetNumber = -1;

    constructor(private sonnetService: SonnetService)
    {
    }

    performSearch(searchString: string)
    {
        this.searchTerm = searchString;
        this.hasPerformedFirstSearch = true;
        if (searchString === '')
        {
            this.filteredSonnets = new Array<SonnetModel>();
        } else {
            this.filteredSonnets = _.filter(this.sonnetService.sonnets, function(sonnet) {
                return _.some(sonnet.lines, _.method('includes', searchString));
            });
        } 
    }

    setToEditMode(sonnetNumber: number)
    {
        if (this.isEditing(sonnetNumber))
        {
            this.currentlyEditingSonnetNumber = -1;
        } else {
          this.currentlyEditingSonnetNumber = sonnetNumber;
        }
    }

    isEditing(sonnetNumber: number)
    {
        return this.currentlyEditingSonnetNumber === sonnetNumber;
    }

    getEditButtonTextFor(sonnetNumber: number)
    {
        return this.isEditing(sonnetNumber) ? 'Finish' : 'Edit';
    }

    trackByFn(index: any, item: any) {
      return index;
   }
}
