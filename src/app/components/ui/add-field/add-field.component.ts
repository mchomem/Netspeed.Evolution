import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { SwotItemType } from '../../../models/swot.model';

@Component({
  selector: 'app-add-field',
  imports: [],
  templateUrl: './add-field.component.html',
  styleUrl: './add-field.component.css'
})
export class AddFieldComponent {
  @ViewChild('textInput') public textInput!: ElementRef;
  
  @Output() public outputAdd = new EventEmitter<string>();
  public addItem (text: string) {
    this.textInput.nativeElement.value = '';

    return this.outputAdd.emit(text);
  }
}
