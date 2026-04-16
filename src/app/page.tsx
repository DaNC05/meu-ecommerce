
import { LinkBotao } from "./styles";
import Link from "next/link";
import CardProduto from './styles';


//Tipagem Simples para os produtos
interface Produto {
  id: number;
  title: string;
  price: number;
  images: string[];
}

export default async function Home() {
  //Faz uma requisição diretamente no corpo do componente
  try {
    const resposta = await fetch('https://dummyjson.com/products', { next: { revalidate: 60 } });
    if (!resposta.ok) throw new Error(`Erro ${resposta.status}`)
    const dados = await resposta.json();
    const produtos: Produto[] = dados.products;
    return (
      <div>
        <h1>Catálogo de Produtos</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
          {produtos.map((produto) => (

            <CardProduto key={produto.id}>
              <h3>{produto.title}</h3>
              <Link href={`/produto/${produto.id}`}>
                <img src={produto.images[0]}></img>
              </Link>
              <p>R$ {produto.price}</p>
              <LinkBotao href={`/produto/${produto.id}`}>Ver Detalhes</LinkBotao>
            </CardProduto>

          ))}

        </div>

      </div>
    )
  }
  catch {
    return <div>Erro ao carregar produtos.</div>;
  }
}