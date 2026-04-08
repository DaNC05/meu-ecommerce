import Link from 'next/link'
//Tipagem Simples para os produtos
interface Produto{
  id:number;
  title: string;
  price: number;
  image: string;
}

export default async function Home(){
  //Faz uma requisição diretamente no corpo do componente
  const resposta = await fetch('https://fakestoreapi.com/products');
  const produtos : Produto[] = await resposta.json();
  return(
    <div>
      <h1>Catálogo de Produtos</h1>
      <div style= {{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(250px, 1fr))', gap:'2rem', marginTop:'2rem' }}>
        {produtos.map((produto) =>(
          <div key ={produto.id} style={{border: '1px solid #ccc', padding:'1rem',borderRadius:'8px'}}>
            <h3>{produto.title}</h3>
            <img src={produto.image}></img>
            <p>R$ {produto.price}</p>
            <Link href={`/produto/${produto.id}`}>Ver Detalhes</Link>
          </div>

        ))}

      </div>

    </div>
  )
}