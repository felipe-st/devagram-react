import { useState, useEffect } from "react";
import Login from "../componentes/login";
import Home from "../componentes/home";
import UsuarioService from "../services/UsuarioService";

const usuarioService = new UsuarioService();
export default function Index() {
  const [estaAutenticado, setEstaAutenticado] = useState(null);
  
  useEffect(() => {
    setEstaAutenticado(
      usuarioService.estaAutenticado()
    );
  }, []);

  if (estaAutenticado === null) {
    return null;
  }
  
  if(estaAutenticado) {
    return <Home />;
  }

  return <Login aposAutenticacao={() => setEstaAutenticado(true)} />;
}
