import { useEffect, useState } from "react";
import FeedService from "../../services/FeedService";
import Postagem from "./Postagem";

const feedService = new FeedService();

export default function Feed({ usuarioLogado, usuarioPerfil }) {
    const [listaDePostagens, setListaDePostagens] = useState([]);

    useEffect(() => {
        async function postFeed() {
            const { data } = await feedService.carregarPostagens(usuarioPerfil?._id);
            const postagensFormatadas = data.map((postagem) => (
                {
                    id: postagem._id,
                    usuario: {
                        id: postagem.userId,
                        nome: postagem?.usuario?.nome || usuarioPerfil?.nome,
                        avatar: postagem?.usuario?.avatar || usuarioPerfil?.avatar
                    },
                    fotoDoPost: postagem.foto,
                    descricao: postagem.descricao,
                    curtidas: postagem.likes,
                    comentarios: postagem.comentarios.map(c => ({
                        nome: c.nome,
                        mensagem: c.comentario
                    }))
            }
        ));

        setListaDePostagens(postagensFormatadas);
        
        /* setListaDePostagens([
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
            },
            {
                id: '3',
                usuario: {
                    id: '3',
                    nome: 'Mocinha, a gatinha Sindicalista',
                    avatar: null
                },
                fotoDoPost: 'https://publisher-publish.s3.eu-central-1.amazonaws.com/pb-brasil247/swp/jtjeq9/media/20180626210624_5b3293b679b75f796a50dbb7jpeg.jpeg',
                descricao: 'O véio é chavoso!',
                curtidas: [],
                comentarios: [
                    {
                        nome: 'Minerva',
                        mensagem: 'É 13!!!'
                    }
                ]
            }
        ]) */
        }

        postFeed();
    }, [usuarioLogado, usuarioPerfil]);

    if (!listaDePostagens.length) {
        return null;
    }

    return (
        <div className="feedContainer largura30pctDesktop">
            {listaDePostagens.map(dadosPostagem => (
                    <Postagem 
                        key={dadosPostagem.id}
                        {...dadosPostagem}
                        usuarioLogado={usuarioLogado}
                    />
                ))    

            }
        </div>
    )
}