import { Component, OnInit } from '@angular/core';
import {Salao} from '../../shared/modelo/salao';
import { SalaoService } from 'src/app/shared/services/salao.service';
import { SALOES } from 'src/app/shared/modelo/SALOES';
import {map, Observable} from "rxjs";
import {SalaoFirestoreService} from "../../shared/services/salao-firestore.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-listagem-salao',
  templateUrl: './listagem-salao.component.html',
  styleUrls: ['./listagem-salao.component.css']
})
export class ListagemSalaoComponent {

  saloes: Observable<Salao[]>;
  quantidadeDeSalao: Observable<number>;


  constructor(private salaoService: SalaoFirestoreService) {
    this.saloes = salaoService.listar();
    this.quantidadeDeSalao = this.saloes.pipe(map(saloes => saloes.length));

  }
  listagem(){
    this.salaoService.listarMaioresDe1Funcionario().subscribe()
  }
  excluir(salaoARemover: Salao): void{
    if (salaoARemover.id){
      this.salaoService.apagar(salaoARemover.id).subscribe(
        salaoRemovido => {}
      );
    }
  }

}
