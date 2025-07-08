import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() public hasNotification: boolean = true;

  public hasNotifications() : boolean {
    return this.hasNotification;
  }
}
