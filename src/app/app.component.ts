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
    hasBeenReset = false;
    filteredSonnets = new Array<SonnetModel>();
    currentlyEditingSonnetNumber = -1;

    constructor(private sonnetService: SonnetService)
    {
    }

    performSearch(searchString: string)
    {
        this.resetEditMode();
        this.searchTerm = searchString;
        this.hasPerformedFirstSearch = true;
        this.hasBeenReset = false;
        if (searchString === '')
        {
            this.resetFilteredSonnets();
        } else {

            // The filtered sonnets from the search string is a shallow copy. This means that the
            // filtered elements refer directly back to the elements in the sonnet service.
            this.filteredSonnets = _.filter(this.sonnetService.sonnets, function(sonnet) {
                return _.some(sonnet.lines, _.method('includes', searchString));
            });
        } 
    }

    setToEditMode(sonnetNumber: number)
    {
        if (this.isEditing(sonnetNumber))
        {
            this.resetEditMode();
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

    resetEditMode()
    {
        this.currentlyEditingSonnetNumber = -1;
    }

    resetToOriginalSonnets()
    {
        this.sonnetService.resetToOriginalSonnets();
        this.resetEditMode();
        this.resetFilteredSonnets();
        this.resetSearchTerm();
        this.hasPerformedFirstSearch = false;
        this.hasBeenReset = true;
    }

    resetFilteredSonnets()
    {
        this.filteredSonnets = new Array<SonnetModel>();
    }

    resetSearchTerm()
    {
        this.searchTerm = '';
    }
}
