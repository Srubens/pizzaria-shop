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

  public efetivarCompra(pedido:Pedido):Observable<any>{
    let headers:HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'DeviceToken': environment.DEVICETOKEN,
      'Authorization': environment.AUTHORIZATION
    })
    let valorTotal = this.carrinhoService.totalCarrinhoCompras()
    let msg = `Ola!\nO pedido feito foi:\n${pedido.itens.map((item) => item.titulo)},\nDescriação do pedido: ${pedido.itens.map((item) => {
      return `${item.desc} Quantidade: ${item.quantidade}`
    })},\n${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valorTotal)}\nSeu pedido já foi anotado e esta sendo finalizado.\nEm X minutos vai ser entregue
    `
    delete pedido.itens[0].img
    // console.log(pedido)
    // console.log(this.http)
    let teste = {"number":5581985349872, "text": msg}
    return this.http.post(
      `${this.URL}/whatsapp/sendText`,
      (teste),
      ({headers:headers})
    ).pipe(map((resposta:any) =>{
      //console.log(resposta)
      resposta
    }))
  }

}
