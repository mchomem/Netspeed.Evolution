import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  tasks: Task[] = [];

  constructor() {}
  
  ngOnInit() {
    this.getTasksMock();
  }

  getTasksMock(){
    this.tasks = [
      { id: 1, name: 'Preencher formulário SWOT', state: 'Pendente' },
      { id: 2, name: 'Preencher Plano de Ação 5W2H', state: 'Pendente' },
    ];
  }
}
