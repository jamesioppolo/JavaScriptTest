import { Component, Output, EventEmitter } from "@angular/core";

import { SearchService } from "app/Services/SearchService";

@Component({
    selector: 'searchComponent',
    templateUrl: './SearchComponent.html',
    styles: [`.component-top-padding { padding-top: 15px }`]
})

export class SearchComponent {
    constructor(private searchService: SearchService)
    {
    }

    private keyDownFunction(event)
    {
        if(event.keyCode == 13) 
        {
            this.search();
        }
    }

    private search()
    {
        this.searchService.searchTermUpdated();
    }

}