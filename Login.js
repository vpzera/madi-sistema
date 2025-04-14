
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAKMBCohKcDEmOg-UCUGon3JYNuRsd0iI",
  authDomain: "gerenciamento-de-process-e93df.firebaseapp.com",
  projectId: "gerenciamento-de-process-e93df",
  storageBucket: "gerenciamento-de-process-e93df.appspot.com",
  messagingSenderId: "666509640433",
  appId: "1:666509640433:web:b8b596cf717a91da10df50"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, senha)
      .then(() => {
        navigate("/painel");
      })
      .catch((error) => {
        setErro("Usuário ou senha inválidos.");
        console.error(error);
      });
  };

  return (
    <div style={{ maxWidth: "400px", margin: "80px auto" }}>
      <h1>🔐 Login</h1>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ width: "100%", padding: "10px", marginBottom: "10px" }} />
        <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} required style={{ width: "100%", padding: "10px", marginBottom: "10px" }} />
        <button type="submit" style={{ width: "100%", padding: "10px" }}>Entrar</button>
      </form>
      {erro && <p style={{ color: "red" }}>{erro}</p>}
    </div>
  );
};

export default Login;
