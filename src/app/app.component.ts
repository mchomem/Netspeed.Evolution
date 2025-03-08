import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/ui/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  template: `
  <app-navbar [title]="title" />
  <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  public title = 'Netspeed Evolution';
}
