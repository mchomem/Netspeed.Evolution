import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/ui/navbar/navbar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-guest-layout',
  imports: [NavbarComponent,RouterOutlet],
  templateUrl: './guest-layout.component.html',
  styleUrl: './guest-layout.component.css'
})
export class GuestLayoutComponent {

}
