
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment-timezone';
import { firstValueFrom } from 'rxjs';
import { Empresas } from 'src/app/core/models/empresas.model';

import { environment } from 'src/enviroment/environment';


@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  empresasUrl: string;
  constructor(
    private http: HttpClient
  ) {
    this.empresasUrl = `${environment.apiUrl}/empresass`
  }

  async listar(): Promise<any> {
    const res = await firstValueFrom(
      this.http.get(`${this.empresasUrl}`));
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

  adicionar(empresas: Empresas): Promise<Empresas> {
    return firstValueFrom(this.http.post<Empresas>(this.empresasUrl, empresas));
  }

  async atualizar(empresas: Empresas): Promise<Empresas> {
    const res = await firstValueFrom(this.http.put<Empresas>(`${this.empresasUrl}/${empresas.id}`, empresas));
    return res as Empresas;
  }

  async buscarPorId(id: number): Promise<Empresas>{
    const res = await firstValueFrom(
      this.http.get(`${this.empresasUrl}/${id}`));
    return res as Empresas;

  }

  async excluir(id: number): Promise<Empresas> {
    const response = await firstValueFrom(this.http.delete(`${this.empresasUrl}/${id}`));
    return response as Empresas;
  }

  async mudarStatus(id: number, status:boolean){
    const headers = new HttpHeaders().append(
        'Content-type',
        'application/json'
    );
    await firstValueFrom(
      this.http.put(`${this.empresasUrl}/${id}/status`, status, { headers })
    );
    return null;
  }

  async AlternarLista(valor: string): Promise<any>{
    const response = await firstValueFrom(
      this.http.get(`${this.empresasUrl}${valor}`)
    );
    return response
  }


  async listarExames(id: number): Promise<any> {
    const res = await firstValueFrom(
      this.http.get(`${this.empresasUrl}/emp/${id}`));
    return res;
  }
}
