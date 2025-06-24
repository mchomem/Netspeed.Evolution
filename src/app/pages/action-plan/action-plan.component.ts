import { Component, Input, OnInit, signal } from '@angular/core';
import { ActionPlanService } from '../../services/action-plan.service';
import { ActionPlan } from '../../models/action-plan.model';
import { ActionListComponent } from '../../components/action-plan/action-list/action-list.component';
import { ActionFormComponent } from '../../components/action-plan/action-form/action-form.component';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
    selector: 'app-action-plan',
    imports: [ActionListComponent, ActionFormComponent],
    templateUrl: './action-plan.component.html',
    styleUrl: './action-plan.component.css'
})
export class ActionPlanComponent implements OnInit {
    constructor(actionPlanService: ActionPlanService, private router: Router) {
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

    public updateActionData(action: ActionPlan): void {
        action.cycleId = this.#cycle;
        action.employeeId = this.#eployeeId;
        action.observation = '';
        action.improvementPoint = '';

        this.#actionPlanService.putAction(action).subscribe(data => {
            if (data.success) {
                this.getActionPlanData();
                this.setGoToForm(false);
            }
        });
    }

    public setGoToForm(openForm: boolean) {
        this.isFormPage.set(openForm);
    }

    public sendActionPlan() {
        Swal.fire({
            title: 'Enviar para análise?', 
            html: 'Após o envio não será possível alterar o plano de ação até que seja devolvido pelo líder da equipe',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Sim, enviar!',
            cancelButtonText: 'Ainda não'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Enviado!', 'Plano de ação enviado para análise', 'success').then(() => { this.router.navigate(['/']); });
            }
        });
    }

    public deleteAction(actionId: number) {
        Swal.fire({
            title: 'Tem certeza?', 
            html: 'Os dados desta ação serão perdidos!',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Sim, excluir!',
            cancelButtonText: 'Não'
        }).then((result) => {
            if (result.isConfirmed) {
                this.#actionPlanService.deleteAction(actionId).subscribe(data => {
                    if (data.success) {
                        Swal.fire('Excluido!', 'Ação excluída com sucesso', 'success').then(() => { window.location.reload(); });
                    }
                    else {
                        Swal.fire('Oops...', 'Houve um erro na sua requisição', 'error');
                    }
                })
            }
        });
    }
}
