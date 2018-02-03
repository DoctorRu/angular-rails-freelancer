import { Component } from '@angular/core';


@Component ({
  moduleId: module.id,
  selector: 'app',
  template: `
    <h1>Navigation</h1>
    <router-outlet></router-outlet>
  `
})

export class AppComponent {
  title: 'Freelance Bootcamp Dashboard';
}

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'app';
// }
