import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AddFieldComponent } from "../../ui/add-field/add-field.component";
import { SwotItemComponent } from "../swot-item/swot-item.component";
import { Swot, SwotItem, SwotItemType } from '../../../models/swot.model';
import { SwotService } from '../../../services/swot.service';

@Component({
  selector: 'app-swot-big-card',
  imports: [AddFieldComponent, SwotItemComponent],
  templateUrl: './swot-big-card.component.html',
  styleUrl: './swot-big-card.component.css'
})
export class SwotBigCardComponent {
  SwotItemType = SwotItemType;

  @Input() public inputSwot: Swot = {} as Swot;

  public getSwotItens (type: string) {
    if (type === 'strengths') {
      return this.inputSwot.strengths;
    }
    else if (type === 'weaknesses') {
      return this.inputSwot.weaknesses;
    }
    else if (type === 'opportunities') {
      return this.inputSwot.opportunities;
    }
    else if (type === 'threats') {
      return this.inputSwot.threats;
    }
    return new Array<SwotItem>;
  }

  @Output() public outputDelete = new EventEmitter<{ order: number, type: SwotItemType }>();
  public deleteItem (order: number, type: SwotItemType) {
    return this.outputDelete.emit({ order, type });
  }

  @Output() public outputUpdate = new EventEmitter<{ item: SwotItem, type: SwotItemType }>();
  public updateItem (item: SwotItem, type: SwotItemType) {
    return this.outputUpdate.emit({ item, type });
  }

  @Output() public outputAdd = new EventEmitter<{ text: string, type: SwotItemType }>();
  public addItem (text: string, type: SwotItemType) {
    return this.outputAdd.emit({ text, type });
  }
}
