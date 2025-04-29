import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Swot, SwotItem, SwotItemType } from '../../../models/swot.model';

@Component({
  selector: 'app-swot-item',
  imports: [],
  templateUrl: './swot-item.component.html',
  styleUrl: './swot-item.component.css'
})
export class SwotItemComponent {

  @Input() public inputSwotItens: Array<SwotItem> = [];
  @Input() public swotType: SwotItemType = SwotItemType.strengths;

  @Output() public outputUpdate = new EventEmitter<{item: SwotItem, type: SwotItemType}>();
  public updateItem (order: number, text: string, type: SwotItemType) {
    var item = new SwotItem (0, text);
    item.order = order;
    return this.outputUpdate.emit({ item, type });
  }

  @Output() public outputDelete = new EventEmitter<{order: number, type: SwotItemType}>();
  public deleteItem (order: number, type: SwotItemType) {
    return this.outputDelete.emit({ order, type });
  }
}
