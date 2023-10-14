import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarrinhoService } from './carrinho.service';
import { Observable, map } from 'rxjs'
import { Pedido } from '../shared/pedido.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class OrdemCompraService {
  public URL = environment.APIWHATS

  constructor(
    public carrinhoService:CarrinhoService,
    private http:HttpClient
  ) { }

  // Observable<any>
  public efetivarCompra(pedido:any):Observable<any>{
    let headers:HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'DeviceToken': environment.DEVICETOKEN,
      'Authorization': environment.AUTHORIZATION
    })
    let valorTotal = this.carrinhoService.totalCarrinhoCompras()
    
    let msg = `Olá ${pedido.nome}.\nSeu Pedido foi:\n${pedido.arrpedidos.map((item:any) => item.titulo)}.\nDescrição do pedido: ${pedido.arrpedidos.map((item:any)=>{ return `${item.desc},\nQuantidade ${item.quantidade}` })}.\n\nTotal R$:${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valorTotal)}\nSeu pedido já foi anotado e está sendo finalizado.`
    
    console.log('Mensagem:',msg)
    delete pedido.img
    console.log(pedido)
    let teste = { "number":+`55${pedido.telefone}`,"text":msg }
    return this.http.post(
      `${this.URL}/whatsapp/sendText`,
      (teste),
      ({headers:headers})
    ).pipe(map((resposta:any)=>{
      console.log(resposta)
      resposta
    }))
  }

}
