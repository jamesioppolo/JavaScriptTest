import { Component } from '@angular/core';
import { SonnetService } from 'app/Services/SonnetService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Shakespeare's Sonnets";
 
  constructor(private sonnetService: SonnetService)
  {
  }
}
