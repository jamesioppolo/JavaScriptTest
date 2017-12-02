import { TestBed, async, getTestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { PopoverModule } from 'ngx-bootstrap';

import { SearchComponent } from './SearchComponent';
import { SearchService } from 'app/Services/SearchService';

export class MockSearchService {
    searchTerm: string;
    searchTermUpdated() { }
}

describe('SearchComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                SearchComponent,
            ],
            providers: [
                {
                    provide: SearchService,
                    useClass: MockSearchService
                }
            ],
            imports: [
                FormsModule,
                PopoverModule.forRoot()
            ]
        }).compileComponents();
    }));

    it(`should call search term updated when enter button pressed`, async(() => {
        // arrange
        const fixture = TestBed.createComponent(SearchComponent);
        const app = fixture.debugElement.componentInstance;
        var searchService = getTestBed().get(SearchService);
        spyOn(searchService, 'searchTermUpdated');

        // act
        app.keyDownFunction({ keyCode : 13 });

        // assert
        expect(searchService.searchTermUpdated).toHaveBeenCalled();
    }));
});
