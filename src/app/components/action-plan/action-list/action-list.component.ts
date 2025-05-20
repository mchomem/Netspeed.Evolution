import { Component, Input } from '@angular/core';
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
}
