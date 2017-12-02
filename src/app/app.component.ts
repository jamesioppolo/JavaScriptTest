import { Component } from '@angular/core';
import { SonnetService } from 'app/Services/SonnetService';
import { FormsModule }   from '@angular/forms';

import { SonnetModel } from 'app/models/SonnetModel';

import * as _ from 'lodash';    

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styles: [`.title-top-space { padding-top:20px }
    .fa-times-right-adjustment { padding-right:5px }`]
})
export class AppComponent {
    title = "Shakespeare's Sonnets";
}
