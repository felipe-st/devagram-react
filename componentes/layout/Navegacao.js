import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import imgHomeAtivo from "../../public/imagens/homeAtivo.svg";
import imgHomeCinza from "../../public/imagens/homeCinza.svg";
import imgPublicacaoAtivo from "../../public/imagens/publicacaoAtivo.svg";
import imgPublicacaoCinza from "../../public/imagens/publicacaoCinza.svg";
import imgUsuarioAtivo from "../../public/imagens/usuarioAtivo.svg";
import imgUsuarioCinza from "../../public/imagens/usuarioCinza.svg";

const mapaDeRotas = {
    home: {
        imagemAtivo: imgHomeAtivo,
        rotasAtivacao: ['/'],
        imagemPadrao: imgHomeCinza
    },
    publicacao: {
        imagemAtivo: imgPublicacaoAtivo,
        rotasAtivacao: ['/publicacao'],
        imagemPadrao: imgPublicacaoCinza
    },
    perfil: {
        imagemAtivo: imgUsuarioAtivo,
        rotasAtivacao: ['/perfil/eu', '/perfil/eu/editar'],
        imagemPadrao: imgUsuarioCinza
    }
}

export default function Navegacao({ className }) {
    const [rotaAtiva, setRotaAtiva] = useState('home');
    const router = useRouter();

    useEffect(() => {
        definirRotaAtiva();
    }, [router.asPath]);

    const definirRotaAtiva = () => {
        const chavesDoMapaDeRotas = Object.keys(mapaDeRotas)
        const indiceAtivo = chavesDoMapaDeRotas.findIndex(chave => {
            return mapaDeRotas[chave].rotasAtivacao.includes(
                window.location.pathname
            );
        });

        if (indiceAtivo === -1) {
            setRotaAtiva('home');
        } else {
            setRotaAtiva(chavesDoMapaDeRotas[indiceAtivo]);
        }
    }

    console.log(rotaAtiva);

    return (
        <nav className={`barraNavegacao ${className}`}>
            <ul>
                <li>
                    <Image 
                        src={imgHomeAtivo}
                        alt='icone home'
                        width={20}
                        height={20}
                    />
                </li>
                <li>
                    <Image 
                        src={imgPublicacaoCinza}
                        alt='icone publicacao'
                        width={20}
                        height={20}
                    />
                </li>
                <li>
                    <Image 
                        src={imgUsuarioCinza}
                        alt='icone usuario'
                        width={20}
                        height={20}
                    />  
                </li>
            </ul>
        </nav>
    );
}
