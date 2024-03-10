import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

import { HomeComponent } from './home/home.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [HomeComponent, RouterOutlet, RouterLink, RouterLinkActive]
})
export class AppComponent {

 
  title = 'base';
  

}
