import { ItemCarrinho } from "./item-carrinho.model";

export class Pedido{
  constructor(
    public itens:Array<ItemCarrinho>
  ){}
}
