import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../shared/produto.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  public produtos:Produto[]|any
  public URL = environment.APIURL

  constructor(
    private http:HttpClient
  ) {
  }

  public async getProdutos():Promise<any|Produto[]>{
    return await this.http.get<any>(`${this.URL}/produtos`)
      .toPromise()
      .then((res:HttpClient) => {
        return res
      })
  }

  public getProdutoPorId(id:number):Promise<any|Produto>{
    return this.http.get<any>(`${this.URL}/produtos?id=${id}`)
               .toPromise()
               .then((res:HttpClient|any) =>{
                return res[0]
               })
  }

}
