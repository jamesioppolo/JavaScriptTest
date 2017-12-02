import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'searchComponent',
    templateUrl: './SearchComponent.html',
    styles: [`.component-top-padding { padding-top: 15px }`]
})

export class SearchComponent {
    @Output() searchString = new EventEmitter<string>();
    
    private searchTerm: string;

    private search()
    {
        this.searchString.emit(this.searchTerm);
    }

    keyDownFunction(event)
    {
        if(event.keyCode == 13) 
        {
            this.search();
        }
    }
}