export class Produto{
    public id:number
    public categoria:string
    public titulo:string
    public desc:string
    public valor:number
    public destaque:boolean
    public img:Array<object>
    public quantidade?:number
  
    constructor(
      id:number,
      categoria:string,
      titulo:string,
      desc:string,
      valor:number,
      destaque:boolean,
      img:Array<object>
  
    ){
      this.id = id
      this.categoria = categoria
      this.titulo = titulo
      this.desc = desc
      this.valor = valor
      this.destaque = destaque
      this.img = img
    }
  
  }
  