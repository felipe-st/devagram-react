import InputPublico from "../inputPublico";
import Botao from "../botao";
import Image from "next/image";
import imagemEnvelope from "../../public/imagens/envelope.svg";
import imagemChave from "../../public/imagens/chave.svg";
import imagemLogo from "../../public/imagens/logo.svg";
import Link from "next/link";
import { useState } from "react";
import { validarEmail, validarSenha } from "../../utils/validadores";

export default function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const validarFormulario = () => {
        return (
            validarEmail(email)
            && validarSenha(senha)
        );
    }

    return (
        <section className={`paginaLogin paginaPublica`}>
            <div className="logoContainer">
                <Image
                    src={imagemLogo}
                    alt='logotipo'
                    layout='fill'
                    className="logo"
                />
            </div>
            <div className="conteudoPaginaPublica">
                <form>
                    <InputPublico 
                        imagem={imagemEnvelope}
                        texto='E-mail'
                        tipo='email'
                        aoAlterarValor={e => setEmail(e.target.value)}
                        valor={email}
                        mensagemvalidacao='O endereço informado é inválido'
                        exibirMensagemValidacao={email && !validarEmail(email)}
                    />

                    <InputPublico 
                        imagem={imagemChave}
                        texto='Senha'
                        tipo='password'
                        aoAlterarValor={e => setSenha(e.target.value)}
                        valor={senha}
                        mensagemvalidacao='Precisa ter pelo menos 3 caracteres'
                        exibirMensagemValidacao={senha && !validarSenha(senha)}
                    />

                    <Botao 
                        texto='Login'
                        tipo='submit'
                        desabilitado={!validarFormulario()}
                    />
                </form>

                <div className="rodapePaginaPublica">
                    <p>Não possui uma conta?</p>
                    <Link href='/cadastro'>Faça seu cadastro agora!</Link>
                </div>
            </div>
        </section>
    );
}