import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Tarefas';
  tarefas = [];
  tarefa = "";

  add(): void {
    this.tarefas.push(this.tarefa);
  }
}
