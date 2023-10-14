import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CarrinhoService } from 'src/app/service/carrinho.service';
import { OrdemCompraService } from 'src/app/service/ordem-compra.service';
import { ItemCarrinho } from 'src/app/shared/item-carrinho.model';
import { Pedido } from 'src/app/shared/pedido.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers:[
    OrdemCompraService
  ]
})
export class OrdemCompraComponent implements OnInit {
  public idPedido:number|any
  public itemsCarrinho:ItemCarrinho[] = []
  private router:Router

  public formulario:FormGroup = new FormGroup({
    'nome':new FormControl(null),
    'telefone':new FormControl(null)
  })

  constructor(
    public carrinhoService:CarrinhoService,
    private ordemCompraService:OrdemCompraService,
    router:Router
  ){
    this.router = router
  }
  ngOnInit(): void {
    this.itemsCarrinho = this.carrinhoService.exibirItens()
  }

  public remove( item:ItemCarrinho ):void{
    this.carrinhoService.removeQdt(item)
  }

  public adicionar(item:ItemCarrinho):void{
    return this.carrinhoService.addQtd(item)
  }

  public redictHome():void{
    this.router.navigate(['/'])
  }

  public confirmarCompra():void{
    let pedido:Pedido = new Pedido(
      this.carrinhoService.exibirItens()
    )
    console.log(pedido)
    let novoPedido:any = {}
    console.log('novo pedido')
    novoPedido.nome = this.formulario.value.nome
    novoPedido.telefone = this.formulario.value.telefone
    novoPedido.arrpedidos = pedido.itens
    console.log(novoPedido)
    
    // console.log(novoPedido)
    this.ordemCompraService.efetivarCompra(novoPedido)
      .subscribe((resposta:any)=>{
        console.log(resposta)
        this.idPedido = resposta
        this.carrinhoService.limparCarrinho()
        this.redictHome()
      })
  }

}
