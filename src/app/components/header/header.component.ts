import { Component, Input, OnInit } from '@angular/core';
import { CarrinhoService } from 'src/app/service/carrinho.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  contador:number = 0
  constructor(
    public carrinhoService:CarrinhoService
  ){}
  ngOnInit(): void {
    this.getDestino()
  }
  public getCountCart():number{
    this.contador = this.carrinhoService.getCount()
    return this.contador
  }

  getDestino(){
    const produtos = document.querySelector(".menu")
    produtos?.addEventListener("click", (e)=>{
      e.preventDefault()
      let prod = document.querySelector("#produtos")
      if( prod ){
        prod.scrollIntoView({
          behavior:'smooth'
        })
      }
    })
  }

}
