import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styles: [`.title-top-space { padding-top:20px }`]
})
export class AppComponent {
    title = "Shakespeare's Sonnets";
}
