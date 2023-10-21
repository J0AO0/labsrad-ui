
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment-timezone';
import { firstValueFrom } from 'rxjs';
import { Atendimentos } from 'src/app/core/models/atendimentos.model';

import { environment } from 'src/enviroment/environment';


@Injectable({
  providedIn: 'root'
})
export class AtendimentosService {

  atendimentosUrl: string;
  constructor(
    private http: HttpClient
  ) {
    this.atendimentosUrl = `${environment.apiUrl}/atendimentoss`
  }

  async listar(): Promise<any> {
    const res = await firstValueFrom(
      this.http.get(`${this.atendimentosUrl}`));
    const obj = res as any[];
    this.converterStringDate(obj);
    return obj;
  }

  converterStringDate(obj: any[]) {
    obj.forEach((element) => {
      element.datagravacao = moment(element.datagravacao, 'YYYY/MM/DD H:mm')
        .tz('America/Sao_Paulo')
        .toDate();
    })
  }

  adicionar(atendimentos: Atendimentos): Promise<Atendimentos> {
    return firstValueFrom(this.http.post<Atendimentos>(this.atendimentosUrl, atendimentos));
  }

  async atualizar(atendimento: Atendimentos): Promise<Atendimentos> {
    const res = await firstValueFrom(this.http.put<Atendimentos>(`${this.atendimentosUrl}/${atendimento.id}`, atendimento));
    return res as Atendimentos;
  }

  async buscarPorId(id: number): Promise<Atendimentos>{
    const res = await firstValueFrom(
      this.http.get(`${this.atendimentosUrl}/${id}`));
    return res as Atendimentos;
    
  }

  async excluir(id: number): Promise<Atendimentos>{
    const response = await firstValueFrom(this.http.delete(`${this.atendimentosUrl}/${id}`));
    return response as Atendimentos;
  }

  async mudarStatus(id: number, status:boolean){
    const headers = new HttpHeaders().append(
        'Content-type',
        'application/json'
    );
    await firstValueFrom(
      this.http.put(`${this.atendimentosUrl}/${id}/status`, status, { headers })
    );
    return null;
  }

  async AlternarLista(valor: string): Promise<any>{
    const response = await firstValueFrom(
      this.http.get(`${this.atendimentosUrl}${valor}`)
    );
    return response
  }


  async listarExames(id: number): Promise<any> {
    const res = await firstValueFrom(
      this.http.get(`${this.atendimentosUrl}/atend/${id}`));
    return res;
  }
}
