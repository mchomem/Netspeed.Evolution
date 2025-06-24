import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActionPlan } from '../../../models/action-plan.model';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-action-list',
    imports: [FormsModule],
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

    @Output() public outputEditAction = new EventEmitter<ActionPlan>();
    public editAction (actionId: number) {
        var whatEdited = $('#what-' + actionId).val()?.toString();
        if (whatEdited) {
            var action = this.inputActions.find(a => a.id === actionId);
            if (action) {
                action.what = whatEdited;
            }
        }
        return this.outputEditAction.emit(action);
    }
    
    public forceBlur(envent: Event) {
        (envent.target as HTMLElement).blur();
    }
}
