import { Component } from '@angular/core';
import { HardskilsComponent } from '../../components/skils/hardskils/hardskils.component';
import { SoftskilsComponent } from '../../components/skils/softskils/softskils.component';

@Component({
  selector: 'app-skils',
  imports: [HardskilsComponent, SoftskilsComponent],
  templateUrl: './skils.component.html',
  styleUrl: './skils.component.css'
})
export class SkilsComponent {

}
