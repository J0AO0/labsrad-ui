
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment-timezone';
import { firstValueFrom } from 'rxjs';
import { Exames } from 'src/app/core/models/exames.model';

import { environment } from 'src/enviroment/environment';


@Injectable({
  providedIn: 'root'
})
export class ExamesService {

  examesUrl: string;
  constructor(
    private http: HttpClient
  ) {
    this.examesUrl = `${environment.apiUrl}/examess`
  }

  async listar(): Promise<any> {
    const res = await firstValueFrom(
      this.http.get(`${this.examesUrl}`));
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

  adicionar(exames: Exames): Promise<Exames> {
    return firstValueFrom(this.http.post<Exames>(this.examesUrl, exames));
  }

  async atualizar(exames: Exames): Promise<Exames> {
    const res = await firstValueFrom(this.http.put<Exames>(`${this.examesUrl}/${exames.id}`, exames));
    return res as Exames;
  }

  async buscarPorId(id: number): Promise<Exames>{
    const res = await firstValueFrom(
      this.http.get(`${this.examesUrl}/${id}`));
    return res as Exames;
    
  }

  async excluir(id: number): Promise<Exames>{
    const response = await firstValueFrom(this.http.delete(`${this.examesUrl}/${id}`));
    return response as Exames;
  }

  async mudarStatus(id: number, status:boolean){
    const headers = new HttpHeaders().append(
        'Content-type',
        'application/json'
    );
    await firstValueFrom(
      this.http.put(`${this.examesUrl}/${id}/status`, status, { headers })
    );
    return null;
  }

  async AlternarLista(valor: string): Promise<any>{
    const response = await firstValueFrom(
      this.http.get(`${this.examesUrl}${valor}`)
    );
    return response
  }


  async listarExames(id: number): Promise<any> {
    const res = await firstValueFrom(
      this.http.get(`${this.examesUrl}/conv/${id}`));
    return res;
  }
}
