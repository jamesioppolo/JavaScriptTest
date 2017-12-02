import { Component, Output, EventEmitter, Input } from "@angular/core";

import { SonnetModel } from "app/models/SonnetModel";
import { SonnetService } from "app/Services/SonnetService";
import { SearchService } from "app/Services/SearchService";

import { Subscription } from 'rxjs/Subscription';

import * as _ from 'lodash';    

@Component({
    selector: 'displayComponent',
    templateUrl: './DisplayComponent.html',
    styles: [`.title-top-space { padding-top:20px }
    .fa-times-right-adjustment { padding-right:5px }`]
})

export class DisplayComponent {
    
    searchEventSubscription: Subscription;

    searchTerm = '';
    hasPerformedFirstSearch = false;
    hasBeenReset = false;
    filteredSonnets = new Array<SonnetModel>();
    currentlyEditingSonnetNumber = -1;

    constructor(private sonnetService: SonnetService,
                private searchService: SearchService)
    {
        this.searchEventSubscription = this.searchService.getEventObserveable().subscribe(() => this.performSearch());
    }

    ngOnDestroy(){
        this.searchEventSubscription.unsubscribe();
    }

    performSearch()
    {
        this.searchTerm = this.searchService.searchTerm;
        this.resetEditMode();
        this.hasPerformedFirstSearch = true;
        this.hasBeenReset = false;
        if (this.searchService.searchTerm === '')
        {
            this.resetFilteredSonnets();
        } else {

            // The filtered sonnets from the search string is a shallow copy. This means that the
            // filtered elements refer directly back to the elements in the sonnet service.
            let filterTerm = this.searchTerm;
            this.filteredSonnets = _.filter(this.sonnetService.sonnets, function(sonnet) {
                return _.some(sonnet.lines, _.method('includes', filterTerm));
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
        this.searchService.reset();
        this.resetEditMode();
        this.resetFilteredSonnets();
        this.hasPerformedFirstSearch = false;
        this.hasBeenReset = true;
    }

    resetFilteredSonnets()
    {
        this.filteredSonnets = new Array<SonnetModel>();
    }
}