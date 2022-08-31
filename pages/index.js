import Head from 'next/head'
import Image from 'next/image'
import { useRef, useState } from 'react'
import Avatar from '../componentes/avatar'
import Botao from '../componentes/botao'
import { UploadImagem } from '../componentes/uploadImagem'

export default function Home() {
  const [imagem, setImagem] = useState(null);
  const referenciaInput = useRef(null);

  console.log(imagem);

  return (
    <>
      <h1>Ola mundo!</h1>
      <button onClick={() => referenciaInput?.current?.click()}>abrir seletor de arquivos</button>
      <UploadImagem 
        setImagem={setImagem} 
        imagemPreview={imagem?.preview}
        aoSetarAReferencia={(ref) => referenciaInput.current = ref} 
      />
      <div>
        <Avatar />
        <Botao texto={'Login'} cor='primaria' desabilitado={false} manipularClique={() => console.log('botao clicado')} />
      </div>
    </>
  )
}
