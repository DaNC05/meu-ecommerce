import BotaoComprar from '../../../components/BotaoComprar'

export default async function PaginaProduto({ 
  params
}:{
  params: Promise<{id:string}>
}){
  const {id} = await params;

try{
  const resposta = await fetch(`https://dummyjson.com/products/${id}`)
  if(!resposta.ok) throw new Error(`Erro ${resposta.status}`);
  const produto = await resposta.json();
  return(
    <div>
      <h1>{produto.title}</h1>
      <img src={produto.images[0]}></img>
      <p>{produto.description}</p>
      <p>R${produto.price}</p>
      <BotaoComprar produtoId={produto.id}></BotaoComprar>
    </div>
  )
}
catch(erro){
  return <div>Erro a carregar produto: {id}</div>
}
}