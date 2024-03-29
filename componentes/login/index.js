import InputPublico from "../inputPublico";
import Botao from "../botao";
import Image from "next/image";
import imagemEnvelope from "../../public/imagens/envelope.svg";
import imagemChave from "../../public/imagens/chave.svg";
import imagemLogo from "../../public/imagens/logo.svg";
import Link from "next/link";
import { useState } from "react";
import { validarEmail, validarSenha } from "../../utils/validadores";
import UsuarioService from "../../services/UsuarioService";

const usuarioService = new UsuarioService();

export default function Login({ aposAutenticacao }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [estaSubmentendo, setEstaSubmetendo] = useState(false); 

    const validarFormulario = () => {
        return (
            validarEmail(email)
            && validarSenha(senha)
        );
    }

    const aoSubmeter = async (e) => {
        e.preventDefault();
        if (!validarFormulario()) {
            return;
        }

        setEstaSubmetendo(true);

        try {
            await usuarioService.login({
                login: email,
                senha
            });

            if (aposAutenticacao) {
                aposAutenticacao();
            }
            
        } catch (error) {
            alert(
                'Erro ao realizar o login.' + error?.response?.data?.erro
            );
        }

        setEstaSubmetendo(false);
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
                <form onSubmit={aoSubmeter}>
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
                        desabilitado={!validarFormulario() || estaSubmentendo}
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