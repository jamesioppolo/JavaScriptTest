import { ComponentFixture, TestBed, async, getTestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { PopoverModule } from 'ngx-bootstrap';

import { DisplayComponent } from './DisplayComponent';
import { SonnetService } from 'app/Services/SonnetService';
import { SearchService } from 'app/Services/SearchService';

export class MockSonnetService {
    assignToLocalStorage() { }
    resetToOriginalSonnets() { }
}

describe('DisplayComponent', () => {
    let fixture: ComponentFixture<DisplayComponent>;
    let comp: DisplayComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                DisplayComponent,
            ],
            providers: [
                {
                    provide: SonnetService,
                    useClass: MockSonnetService
                },
                SearchService
            ],
            imports: [
                FormsModule,
                PopoverModule.forRoot()
            ]
        }).compileComponents();
    }));

    beforeEach(() =>
    {
        fixture = TestBed.createComponent(DisplayComponent);
        comp = fixture.debugElement.componentInstance;
    });

    it(`edit button should read 'Finish' when editing a sonnet`, async(() => {
        // arrange
        comp.currentlyEditingSonnetNumber = 5;

        // act
        let buttonText = comp.getEditButtonTextFor(5);

        // assert
        expect(buttonText).toBe('Finish');
    }));

    
    it(`edit button should read 'Edit' when editing a sonnet`, async(() => {
        // arrange
        comp.currentlyEditingSonnetNumber = 1;

        // act
        let buttonText = comp.getEditButtonTextFor(5);

        // assert
        expect(buttonText).toBe('Edit');
    }));
});
