import { CardProduto, LinkBotao } from "@/app/styles";
import Link from "next/link";

interface Produto {
    id: number;
    title: string;
    price: number;
    images: string[];
    rating: number;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    return {
        title: `${slug} - Meu E-commerce`,
    }
}
export default async function PaginaCategoria({
    params
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params;

    try {
        const resposta = await fetch(`https://dummyjson.com/products/category/${slug}`, { next: { revalidate: 60 } });
        if (!resposta.ok) throw new Error(`Erro ${resposta.status}`)
        const dados = await resposta.json();
        const produtos: Produto[] = dados.products;

        return (
            <div>
                <h1>{slug}</h1>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem' }}>

                    {produtos.map((produto) => (

                        <CardProduto key={produto.id} >
                            <h3>{produto.title}</h3>
                            <Link href={`/produto/${produto.id}`}>
                                <img src={produto.images[0]}></img>
                            </Link>
                            <p>R$ {produto.price}</p>
                            <LinkBotao href={`/produto/${produto.id}`}>Ver Detalhes</LinkBotao>
                        </CardProduto>
                    ))}

                </div>

            </div >
        )
    }
    catch (erro) {
        return <div>Erro a carregar categoria: {slug}</div>
    }
}