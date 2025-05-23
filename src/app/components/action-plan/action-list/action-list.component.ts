import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActionPlan } from '../../../models/action-plan.model';

@Component({
    selector: 'app-action-list',
    imports: [],
    templateUrl: './action-list.component.html',
    styleUrl: './action-list.component.css'
})
export class ActionListComponent {
    @Input() public inputActions: Array<ActionPlan> = [];

    public getActions(): Array<ActionPlan> {
        return this.inputActions;
    }

    @Output() public outputGoToForm = new EventEmitter<boolean>();
    public goToForm (openForm: boolean) {
        return this.outputGoToForm.emit(openForm);
    }

    @Output() public outputDeleteAction = new EventEmitter<number>();
    public deleteAction (actionId: number) {
        return this.outputDeleteAction.emit(actionId);
    }
}
