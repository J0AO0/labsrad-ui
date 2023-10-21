
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment-timezone';
import { firstValueFrom } from 'rxjs';
import { Usuarios } from 'src/app/core/models/usuarios.model';

import { environment } from 'src/enviroment/environment';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  usuariosUrl: string;
  constructor(
    private http: HttpClient
  ) {
    this.usuariosUrl = `${environment.apiUrl}/usuarioss`
  }

  async listar(): Promise<any> {
    const res = await firstValueFrom(
      this.http.get(`${this.usuariosUrl}`));
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

  adicionar(usuarios: Usuarios): Promise<Usuarios> {
    return firstValueFrom(this.http.post<Usuarios>(this.usuariosUrl, usuarios));
  }

  async atualizar(usuarios: Usuarios): Promise<Usuarios> {
    const res = await firstValueFrom(this.http.put<Usuarios>(`${this.usuariosUrl}/${usuarios.id}`, usuarios));
    return res as Usuarios;
  }

  async buscarPorId(id: number): Promise<Usuarios>{
    const res = await firstValueFrom(
      this.http.get(`${this.usuariosUrl}/${id}`));
    return res as Usuarios;
    
  }

  async excluir(id: number): Promise<Usuarios>{
    const response = await firstValueFrom(this.http.delete(`${this.usuariosUrl}/${id}`));
    return response as Usuarios;
  }

  async mudarStatus(id: number, status:boolean){
    const headers = new HttpHeaders().append(
        'Content-type',
        'application/json'
    );
    await firstValueFrom(
      this.http.put(`${this.usuariosUrl}/${id}/status`, status, { headers })
    );
    return null;
  }

  async AlternarLista(valor: string): Promise<any>{
    const response = await firstValueFrom(
      this.http.get(`${this.usuariosUrl}${valor}`)
    );
    return response
  }


  async listarExames(id: number): Promise<any> {
    const res = await firstValueFrom(
      this.http.get(`${this.usuariosUrl}/conv/${id}`));
    return res;
  }
}
