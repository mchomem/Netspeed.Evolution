import { Component, inject, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  #tasks: Task[] = [
    new Task(1, 'Preencher formulário SWOT', 'Pendente','swot'),
    new Task(2, 'Preencher Plano de Ação 5W2H', 'Pendente','5w2h')
  ];
  #router = inject(Router);

  public getTasks() {
    return this.#tasks;
  }

  public openTask(type: string) {
    if (type === 'swot') {
      this.#router.navigate(["/swot"]);
    }
    else {
      this.#router.navigate(["/action-plan"]);
    }
  }
}
