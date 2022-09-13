import Image from "next/image";
import { useState } from "react";
import logoHorizontalImg from "../../public/imagens/logoHorizontal.svg";
import imagemLupa from "../../public/imagens/lupa.svg";
import Navegacao from "./Navegacao";
import ResultadoPesquisa from "./ResultadoPesquisa";

export default function Cabecalho() {
    const [resultadoPesquisa, setResultadoPesquisa] = useState([]);
    const [termoPesquisado, setTermoPesquisado] = useState([]);

    const aoClicarResultadoDaPesquisa = (id) => {
        console.log('aoClicarResultadoDaPesquisa', {id});

        if (termoPesquisado.length < 3) {
            return;
        }

        setRe
    }

    return (
        <header className='cabecalhoPrincipal'>
            <div className="conteudoCabecalhoPrincipal">
                <div className="logoCabecalhoPrincipal">
                    <Image
                        src={logoHorizontalImg}
                        alt='logo devagram'
                        layout="fill"
                    />
                </div>
                <div className="barraPesquisa">
                    <div className="containerImagemLupa">
                        <Image 
                            src={imagemLupa}
                            alt='Icone Lupa'
                            layout="fill"
                        />
                    </div>
                    <input
                        type='text'
                        placeholder='Pesquisar'
                        value={termoPesquisado}
                        onChange={(e) => setTermoPesquisado(e.target.value)}
                    />
                </div>

                <Navegacao className='desktop' />
            </div>

            {resultadoPesquisa.length > 0 && (
                <div className="resultadoPesquisaContainer">
                    {resultadoPesquisa.map(r => (
                        <ResultadoPesquisa
                            avatar={r.avatar}
                            nome={r.nome}
                            email={r.email}
                            key={r._id}
                            id={r._id}
                            onClick={aoClicarResultadoDaPesquisa}
                        />
                    ))}
                </div>
            )}

        </header>
    )
}