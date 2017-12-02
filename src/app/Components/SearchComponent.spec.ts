import { ComponentFixture, TestBed, async, getTestBed } from '@angular/core/testing';
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
    let fixture: ComponentFixture<SearchComponent>;
    let comp: SearchComponent;

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

    beforeEach(() =>
    {
        fixture = TestBed.createComponent(SearchComponent);
        comp = fixture.debugElement.componentInstance;
    });

    it(`should invoke searchTermUpdated() function when enter button pressed`, async(() => {
        // arrange
        var searchService = getTestBed().get(SearchService);
        spyOn(searchService, 'searchTermUpdated');

        // act
        comp.keyDownFunction({ keyCode : 13 });

        // assert
        expect(searchService.searchTermUpdated).toHaveBeenCalled();
    }));

    it(`should not invoke searchTermUpdated() function for any non-enter key press`, async(() => {
        // arrange
        var searchService = getTestBed().get(SearchService);
        spyOn(searchService, 'searchTermUpdated');

        // act and assert
        for (let keycode = 0; keycode < 255; keycode++)
        {
            if (keycode !== 13)
            {
                comp.keyDownFunction({ keyCode : keycode });
                expect(searchService.searchTermUpdated).not.toHaveBeenCalled();
            }
        }
    }));
});
