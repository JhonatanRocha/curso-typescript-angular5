import { Usuario } from './usuario';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Tarefas';
  upperText:string = 'texto em uppercase';
  lowerText:string = 'TEXTO EM LOWERCASE';
  numberPercent: number = 1;
  dataDeHoje: Date = new Date();
  dinheiro: number = 1000;
  isAdmin: boolean = true;
  perfil: number = 2;
  usuario: Usuario = {
    nome: 'Jhol',
    idade: 28
  }
}
