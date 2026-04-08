import BotaoComprar from '../../../components/BotaoComprar'

export default async function PaginaProduto({ 
  params
}:{
  params: Promise<{id:string}>
}){
  const {id} = await params;
  const resposta = await fetch(`https://fakestoreapi.com/products/${id}`)
  const produto = await resposta.json();

  return(
    <div>
      <h1>{produto.title}</h1>
      <img src={produto.image}></img>
      <p>{produto.description}</p>
      <p>R${produto.price}</p>
      <BotaoComprar produtoId={produto.id}></BotaoComprar>
    </div>
  )
}