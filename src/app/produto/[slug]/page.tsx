export default async function PaginaProduto({ 
  params
}:{
  params: Promise<{slug:string}>
}){
  const {slug} = await params;
  return(
    <main>
      <h1>Detalhes do Produto : {slug}</h1>
      <p>Aqui buscaremos no banco de dados o produto com o identificador: {slug}</p>
    </main>
  )
}