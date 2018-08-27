import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-tarefa',
  templateUrl: './lista-tarefa.component.html',
  styleUrls: ['./lista-tarefa.component.css']
})
export class ListaTarefaComponent {
  tarefas = [];
  tarefa = "";

  add(): void {
    this.tarefas.push(this.tarefa);
  }

}
