import Link from 'next/link'
//Tipagem Simples para os produtos
interface Produto{
  id:number;
  title: string;
  price: number;
  images: string[];
}

export default async function Home(){
  //Faz uma requisição diretamente no corpo do componente
  try{
  const resposta = await fetch('https://dummyjson.com/products');
  if(!resposta.ok) throw new Error(`Erro ${resposta.status}`)
    const dados = await resposta.json();
    const produtos: Produto[] = dados.products;
  return(
    <div>
      <h1>Catálogo de Produtos</h1>
      <div style= {{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(250px, 1fr))', gap:'2rem', marginTop:'2rem' }}>
        {produtos.map((produto) =>(
          <div key ={produto.id} style={{border: '1px solid #ccc', padding:'1rem',borderRadius:'8px'}}>
            <h3>{produto.title}</h3>
            <img src={produto.images[0]}></img>
            <p>R$ {produto.price}</p>
            <Link href={`/produto/${produto.id}`}>Ver Detalhes</Link>
          </div>

        ))}

      </div>

    </div>
  )}
  catch{
    return <div>Erro ao carregar produtos.</div>;
  }
}