import { Component, OnInit } from '@angular/core';
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
  ngOnInit(): void {}
  public getCountCart():number{
    this.contador = this.carrinhoService.getCount()
    return this.contador
  }
}
