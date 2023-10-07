
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment-timezone';
import { firstValueFrom } from 'rxjs';
import { Convenios } from 'src/app/core/models/convenios.model';
import { environment } from 'src/enviroment/environment';


@Injectable({
  providedIn: 'root'
})
export class ConveniosService {

  convenioUrl: string;
  constructor(
    private http: HttpClient
  ) {
    this.convenioUrl = `${environment.apiUrl}/convenios`
  }

  listar(): Promise<any> {
    return firstValueFrom(
      this.http.get(`${this.convenioUrl}`)).then((res) => {
        const obj = res as any[];
        this.converterStringDate(obj);
        return obj;
      })
  }

  converterStringDate(obj: any[]) {
    obj.forEach((element) => {
      element.datagravacao = moment(element.datagravacao, 'YYYY/MM/DD H:mm')
        .tz('America/Sao_Paulo')
        .toDate();
    })
  }

  adicionar(convenio: Convenios): Promise<Convenios> {
    return firstValueFrom(this.http.post<Convenios>(this.convenioUrl, convenio));
  }

  async atualizar(convenio: Convenios): Promise<Convenios> {
    const res = await firstValueFrom(this.http.put<Convenios>(`${this.convenioUrl}/${convenio.id}`, convenio));
    return res as Convenios;
  }

  async buscarPorId(id: number): Promise<Convenios>{
    const res = await firstValueFrom(
      this.http.get(`${this.convenioUrl}/${id}`));
    return res as Convenios;
    
  }

  async mudarStatus(id: number, status:boolean){
    const headers = new HttpHeaders().append(
        'Content-type',
        'application/json'
    );
    await firstValueFrom(
      this.http.put(`${this.convenioUrl}/${id}/status`, status, { headers })
    );
    return null;
  }

  async AlternarLista(valor: string): Promise<any>{
    const response = await firstValueFrom(
      this.http.get(`${this.convenioUrl}${valor}`)
    );
    return response
  }


  async listarExames(id: number): Promise<any> {
    const res = await firstValueFrom(
      this.http.get(`${this.convenioUrl}/conv/${id}`));
    return res;
  }
}
