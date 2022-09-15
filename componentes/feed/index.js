import { useEffect, useState } from "react"

export function Feed({ usuarioLogado }) {
    const [listaDePostagens, setListaDePostagens] = useState();

    useEffect(() => {
        console.log('carregar o feed');
        setListaDePostagens([
            {
                id: '1'
            }
        ])
    }, [usuarioLogado]);

    return (
        <></>
    )
}