import { AfterViewInit, Component, EventEmitter, Output } from '@angular/core';
import { ActionPlan } from '../../../models/action-plan.model';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-action-form',
    imports: [],
    templateUrl: './action-form.component.html',
    styleUrl: './action-form.component.css'
})
export class ActionFormComponent implements AfterViewInit {
    ngAfterViewInit(): void {
        const form = $('#wizardForm');

        (form as any).validate({
            errorClass: 'text-danger',
            rules: {
                what: { required: true },
                why: { required: true },
                when: { required: true },
                where: { required: true },
                who: { required: true },
                how: { required: true },
                howMuch: { required: true }
            }
        });

        ($("#steps") as any).steps({
            headerTag: "h3",
            bodyTag: "section",
            transitionEffect: "slideLeft",
            autoFocus: true,
            onStepChanging: (event: any, currentIndex: number, newIndex: number) => {
                if (currentIndex > newIndex) {
                    return true;
                }

                if (currentIndex == 0) {
                    const whatValue = ($('#what').val() as string)?.trim();
                    if (whatValue) {
                        $('.card-title').html(whatValue);
                    }
                }

                const formWizard = $('#wizardForm');
                return (formWizard as any).valid();
            },
            onFinishing: (event: any, currentIndex: number) => {
                const formData = {
                    what: ($('#what').val() as string)?.trim(),
                    why: ($('#why').val() as string)?.trim(),
                    when: ($('#when').val() as string)?.trim(),
                    where: ($('#where').val() as string)?.trim(),
                    who: ($('#who').val() as string)?.trim(),
                    how: ($('#how').val() as string)?.trim(),
                    howMuch: ($('#howMuch').val() as string)?.trim(),
                };

                if(!formData.what || !formData.why || !formData.when || !formData.where || !formData.who || !formData.how || !formData.howMuch) {
                    Swal.fire("Atenção", "Parece que alguns dados não estão preenchidos corretamente, verifique e tente novamente", "warning");
                    return false;
                }

                return true;
            },
            onFinished: (event: any, currentIndex: number) => {
                const formData = {
                    what: ($('#what').val() as string)?.trim(),
                    why: ($('#why').val() as string)?.trim(),
                    when: ($('#when').val() as string)?.trim(),
                    where: ($('#where').val() as string)?.trim(),
                    who: ($('#who').val() as string)?.trim(),
                    how: ($('#how').val() as string)?.trim(),
                    howMuch: ($('#howMuch').val() as string)?.trim(),
                } as ActionPlan;

                this.saveAction(formData);
            }
        });
    }

    @Output() public outputSaveAction = new EventEmitter<ActionPlan>();
    public saveAction (action: ActionPlan) {
        return this.outputSaveAction.emit(action);
    }
}