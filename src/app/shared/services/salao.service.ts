import { Injectable } from '@angular/core';
import { Salao } from '../modelo/salao';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SalaoService {

  URL_SALAO = 'http://localhost:3000/saloes'

  constructor(private httpClient: HttpClient) {
  }

  listar(): Observable<Salao[]> {
    return this.httpClient.get<Salao[]>(this.URL_SALAO);
  }

  inserir(salao : Salao): Observable<Salao>{
    return this.httpClient.post<Salao>(this.URL_SALAO, salao)
  }
  atualizar(salao: Salao): Observable<Salao> {
    return this.httpClient.put<Salao>
    (`${this.URL_SALAO}/${salao.id}`, salao);
  }

  apagar(id: number): Observable<Salao> {
    return this.httpClient.delete<Salao>(`${this.URL_SALAO}/${id}`)
  }

  pesquisarPorId(id: number): Observable<Salao> {
    return this.httpClient.get<Salao>(`${this.URL_SALAO}/${id}`)
  }

}
