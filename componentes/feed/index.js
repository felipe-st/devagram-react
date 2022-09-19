import { useEffect, useState } from "react";
import Postagem from "./Postagem";


export function Feed({ usuarioLogado }) {
    const [listaDePostagens, setListaDePostagens] = useState([]);

    useEffect(() => {
        console.log('carregar o feed');
        setListaDePostagens([
            {
                id: '1',
                usuario: {
                    id: '1',
                    nome: 'Minerva',
                    avatar: null
                },
                fotoDoPost: 'https://www.bing.com/th?id=OIP.JXxO1e0cwBF4wA_s0NbgzgHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
                descricao: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
                curtidas: [],
                comentarios: [
                    {
                        nome: 'Fulano',
                        mensagem: 'Muito legal'
                    }
                ]
            },
            {
                id: '2',
                usuario: {
                    id: '2',
                    nome: 'Pandora',
                    avatar: null
                },
                fotoDoPost: 'https://www.bing.com/th?id=OIP.dwali5jYj_mhkjBDX7rx9gHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
                descricao: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu',
                curtidas: [],
                comentarios: [
                    {
                        nome: 'Ciclano',
                        mensagem: 'Muito bom'
                    }
                ]
            }
        ])
    }, [usuarioLogado]);

    return (
        <div className="feedContainer">
            {listaDePostagens.map(dadosPostagem => (
                <Postagem key={dadosPostagem.id} {...dadosPostagem} />
            ))}
        </div>
    )
}