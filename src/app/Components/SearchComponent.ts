import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'searchComponent',
    templateUrl: './SearchComponent.html'
})

export class SearchComponent {
    @Output() searchString = new EventEmitter<string>();

    private searchTerm: string;

    private search()
    {
        this.searchString.emit(this.searchTerm);
    }
}