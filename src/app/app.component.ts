import { Component } from '@angular/core';
import { SonnetService } from 'app/Services/SonnetService';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  
  title = "Shakespeare's Sonnets";
  searchTerm: string;

  constructor(private sonnetService: SonnetService)
  {
  }

  performSearch(searchString: string)
  {
    console.log(`searchString=${searchString}`);
  }

}
