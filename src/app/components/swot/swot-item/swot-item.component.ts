import { Component, Input } from '@angular/core';
import { Swot } from '../../../models/swot.model';

@Component({
  selector: 'app-swot-item',
  imports: [],
  templateUrl: './swot-item.component.html',
  styleUrl: './swot-item.component.css'
})
export class SwotItemComponent {

  @Input() public inputSwotItens: Array<Swot> = [];
  @Input() public swotType: string = '';

  public deleteItem (id: number, type: string) {

  }
}
