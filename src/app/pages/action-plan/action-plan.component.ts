import { Component, Input, OnInit, signal } from '@angular/core';
import { ActionPlanService } from '../../services/action-plan.service';
import { ActionPlan } from '../../models/action-plan.model';
import { ActionListComponent } from '../../components/action-plan/action-list/action-list.component';
import { ActionFormComponent } from '../../components/action-plan/action-form/action-form.component';

@Component({
    selector: 'app-action-plan',
    imports: [ActionListComponent, ActionFormComponent],
    templateUrl: './action-plan.component.html',
    styleUrl: './action-plan.component.css'
})
export class ActionPlanComponent implements OnInit {
    constructor(actionPlanService: ActionPlanService) {
        this.#actionPlanService = actionPlanService;
    }

    public isFormPage = signal<boolean>(false);

    @Input() public inputActions: boolean = false;

    #actionPlanService: ActionPlanService;
    #eployeeId: number = 1;
    #cycle: number = 1;
    #actionPlanData: Array<ActionPlan> = [];

    #actionPlanSignal = signal<Array<ActionPlan>>(this.#actionPlanData);

    ngOnInit(): void {
        this.getActionPlanData();
    }

    public getActionsList(): Array<ActionPlan> {
        return this.#actionPlanSignal();
    }

    public getActionPlanData(): void {
        this.#actionPlanService.getActions(this.#eployeeId, this.#cycle).subscribe(data => {
            if (data.success) {
                this.#actionPlanData = data.data as Array<ActionPlan>;
                this.#actionPlanSignal.set(this.#actionPlanData);
            }
        });
    }

    public saveActionData(action: ActionPlan): void {
        action.cycleId = this.#cycle;
        action.employeeId = this.#eployeeId;
        action.observation = '';
        action.improvementPoint = '';

        this.#actionPlanService.postAction(action).subscribe(data => {
            if (data.success) {
                this.getActionPlanData();
                this.setGoToForm(false);
            }
        });
    }

    public setGoToForm(openForm: boolean) {
        this.isFormPage.set(openForm);
    }
}
