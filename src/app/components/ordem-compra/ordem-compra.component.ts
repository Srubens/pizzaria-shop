import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    // console.log(pedido)
    this.ordemCompraService.efetivarCompra(pedido)
        .subscribe((resposta:any) =>{
          //console.log(resposta)
          this.idPedido = resposta
          this.carrinhoService.limparCarrinho()
          this.redictHome()
        })
  }

}
