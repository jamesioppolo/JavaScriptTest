import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class SearchService
{
    private searchTermSubject = new Subject<string>();

    public searchTerm: string;

    searchTermUpdated()
    {
        this.searchTermSubject.next(this.searchTerm);
    }

    getEventObserveable()
    {
        return this.searchTermSubject.asObservable();
    }

    reset()
    {
        this.searchTerm = '';
    }
}