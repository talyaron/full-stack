import { Component } from '@angular/core';

@Component({ // component decorator
  selector: 'app-root', //name of component
  templateUrl: './app.component.html', //html
  styleUrls: ['./app.component.css'] //style
})
export class AppComponent { //component logic
  title = 'basic';
}
