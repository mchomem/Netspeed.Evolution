import { Component, OnInit, signal } from '@angular/core';
import { ActionPlanService } from '../../services/action-plan.service';
import { ActionPlan } from '../../models/action-plan.model';
import { ActionListComponent } from '../../components/action-plan/action-list/action-list.component';

@Component({
    selector: 'app-action-plan',
    imports: [ActionListComponent],
    templateUrl: './action-plan.component.html',
    styleUrl: './action-plan.component.css'
})
export class ActionPlanComponent implements OnInit {
    constructor(actionPlanService: ActionPlanService) {
        this.#actionPlanService = actionPlanService;
    }

    #actionPlanService: ActionPlanService;
    #eployeeId: number = 1;
    #cycle: number = 1;
    #actionPlanData: Array<ActionPlan> = [];

    #actionPlanSignal = signal<Array<ActionPlan>>(this.#actionPlanData);

    ngOnInit(): void {
        this.#actionPlanService.getActions(this.#eployeeId, this.#cycle).subscribe(data => {
            if (data.success) {
                this.#actionPlanData = data.data as Array<ActionPlan>;
                this.#actionPlanSignal.set(this.#actionPlanData);
            }
        });
    }

    public getActions(): Array<ActionPlan> {
        return this.#actionPlanSignal();
    }
}
