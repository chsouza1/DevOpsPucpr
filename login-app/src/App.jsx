import React, { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const validarLogin = () => {
    if (email === "carlos.gomes@pucpr.br" && senha === "AtividadeSomativa1") {
      setMensagem("Acessado com sucesso!");
    } else {
      setMensagem("Usuário ou senha incorretos!");
    }
  };

  return (
    <div style={{ margin: "30px", fontFamily: "Arial" }}>
      <h2>Login</h2>
      <div>
        <input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        <input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        <button onClick={validarLogin}>Acessar</button>
      </div>
      <p style={{ marginTop: "15px" }}>{mensagem}</p>
    </div>
  );
}

export default App;
