
import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyBAKMBCohKcDEmOg-UCUGon3JYNuRsd0iI",
  authDomain: "gerenciamento-de-process-e93df.firebaseapp.com",
  projectId: "gerenciamento-de-process-e93df",
  storageBucket: "gerenciamento-de-process-e93df.appspot.com",
  messagingSenderId: "666509640433",
  appId: "1:666509640433:web:b8b596cf717a91da10df50"
};

initializeApp(firebaseConfig);
const auth = getAuth();

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, senha)
      .then(() => navigate("/painel"))
      .catch(() => alert("Erro ao logar"));
  };

  return (
    <form onSubmit={login} style={{ padding: 20 }}>
      <h1>Login</h1>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} required />
      <button type="submit">Entrar</button>
    </form>
  );
}
