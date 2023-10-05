import { Injectable } from '@angular/core';
import { ItemCarrinho } from '../shared/item-carrinho.model';
import { Produto } from '../shared/produto.model';

@Injectable()
class CarrinhoService {
  public items:ItemCarrinho[] = []
  constructor() {}

  public exibirItens():ItemCarrinho[]{
    if( window.localStorage.getItem('BD') ){
      let data:any = window.localStorage.getItem('BD')
      this.items = JSON.parse(data)
      return this.items
    }else{
      return this.items = []
    }
  }

  public getCount():number{
    let count:number = 0
    if( window.localStorage.getItem('BD') ){
      count = this.items.length
    }else{
      this.items = []
    }
    return count
  }

  public totalCarrinhoCompras():number{
    let total:number = 0
    this.items.map((item:ItemCarrinho) =>{
      total = total + (item.valor * item.quantidade)
    })
    window.localStorage.setItem('BD', JSON.stringify(this.items))
    return total
  }

  public addItem(produto:Produto):void{
    let itemCarrinho:ItemCarrinho = new ItemCarrinho(
      produto.id,
      produto.titulo,
      produto.img[0],
      produto.desc,
      produto.valor,
      produto.quantidade = 1
    )

    let itemEncontrado = this.items.find((item:ItemCarrinho) => item.id === itemCarrinho.id)

    if( itemEncontrado ){
      itemEncontrado.quantidade += 1
    }else{
      this.items.push(itemCarrinho)
    }
    window.localStorage.setItem('BD', JSON.stringify(this.items))
    console.log(this.items)
  }

  public removeQdt(itemCarrinho:ItemCarrinho):void{
    let itemEncontrado = this.items.find((item:ItemCarrinho) => item.id === itemCarrinho.id)
    if( itemEncontrado ){
      itemEncontrado.quantidade -= 1
      if( itemEncontrado.quantidade === 0 ){
        this.items.splice(this.items.indexOf(itemEncontrado), 1)
      }
    }
    window.localStorage.setItem('BD',JSON.stringify(this.items))
  }

  public addQtd(itemCarrinho:ItemCarrinho):void{
    let itemEncontrado = this.items.find((item:ItemCarrinho) => item.id === itemCarrinho.id)

    if( itemEncontrado ){
      itemEncontrado.quantidade += 1
    }
    window.localStorage.setItem('BD', JSON.stringify(this.items))
  }

  public limparCarrinho():void{
    this.items = []
    window.localStorage.setItem('BD', JSON.stringify(this.items))
  }

}
export {CarrinhoService}
