import BotaoComprar from '../../../components/BotaoComprar'
import { ProdutoContainer, ImagemProduto, InfoContainer } from './styles';


export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const resposta = await fetch(`https://dummyjson.com/products/${id}`)
  const produto = await resposta.json();
  return {
    title: `${produto.title} - Meu E-commerce`,
  }
}
export default async function PaginaProduto({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;

  try {
    const resposta = await fetch(`https://dummyjson.com/products/${id}`)
    if (!resposta.ok) throw new Error(`Erro ${resposta.status}`);
    const produto = await resposta.json();
    return (
      <ProdutoContainer>

        <ImagemProduto src={produto.images[0]}></ImagemProduto>
        <InfoContainer>
          <h1>{produto.title}</h1>
          <p>{produto.description}</p>
          <p>R${produto.price}</p>
          <BotaoComprar produtoId={produto.id}></BotaoComprar>
        </InfoContainer>

      </ProdutoContainer>
    )
  }
  catch (erro) {
    return <div>Erro a carregar produto: {id}</div>
  }
}