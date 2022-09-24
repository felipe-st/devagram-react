import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CabecalhoPerfil from '../../../componentes/cabecalhoPerfil';
import Feed from '../../../componentes/feed';
import comAutorizacao from '../../../hoc/comAutorizacao';
import UsuarioService from '../../../services/UsuarioService';

const usuarioService = new UsuarioService();

function Perfil( { usuarioLogado }) {
    const [usuario, setUsuario] = useState({});
    const router = useRouter();

    const obterPerfil = async (idUsuario) => {
        try {
            const { data } = await usuarioService.obterPerfil(idUsuario);
            return data;
        } catch (error) {
            alert(`Erro ao obter o perfil do usuário!`);
        }
    }

    useEffect(() => {
        async function configurarCabecalho() {
            if(!router.query.id) {
                return
            }
            const dadosPerfil = await obterPerfil(router.query.id);
        setUsuario(dadosPerfil);
        }       
        configurarCabecalho();
    }, [router.query.id]);

    return (
        <div className='paginaPerfil'>
            <CabecalhoPerfil
                usuarioLogado={usuarioLogado}
                usuario={usuario}    
            />
            <Feed
                usuarioLogado={usuarioLogado}
                usuarioPerfil={usuario}
            />
        </div>
    );
}

export default comAutorizacao(Perfil);