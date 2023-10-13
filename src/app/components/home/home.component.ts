import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/service/produto.service';
import { Produto } from 'src/app/shared/produto.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[ProdutoService]
})
export class HomeComponent implements OnInit {
  produtos:Produto[]|any 
  produtos1:Produto[]|any 
  produtos2:Produto[]|any 
  
  constructor(
    private produtoService:ProdutoService
  ){}

  ngOnInit(): void {
    
    // this.produtoService.getProdutos()
    //     .then((produtos:Produto[]) =>{
    //       this.produtos = produtos
    //     })

    this.produtoService.getProdutoName('Pizza')
        .then((produtos:Produto[])=>{
          console.log(produtos)
          this.produtos = produtos
        })
    
    this.produtoService.getProdutoName('Bebidas')
        .then((produtos:Produto[])=>{
          console.log(produtos)
          this.produtos1 = produtos
        })
    
    this.produtoService.getProdutoName('Doces')
        .then((produtos:Produto[])=>{
          console.log(produtos)
          this.produtos2 = produtos
        })
  }

}
