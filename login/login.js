// Pequena base local inicial para teste (pode ser expandida depois para player, mestre e admin)
const USUARIOS_INICIAIS = [
  {
    login: "player",
    senha: "12345",
    role: "player",
    nomeExibicao: "Jogador Malsentof"
  }
];

// Ajuste o caminho abaixo se o HTML do seu montador tiver outro nome ou estiver em subpasta
const ROTA_POR_ROLE = {
  player: "../player/index.html",
  mestre: "mestre.html",
  admin: "admin.html"
};

document.addEventListener("DOMContentLoaded", () => {
  const formLogin = document.getElementById("formLoginMalsentof");
  const inputUsuario = document.getElementById("inputUsuario");
  const inputSenha = document.getElementById("inputSenha");
  const btnAlternarSenha = document.getElementById("btnAlternarSenha");
  const mensagemLogin = document.getElementById("mensagemLogin");

  btnAlternarSenha.addEventListener("click", () => {
    const estaOculta = inputSenha.type === "password";
    inputSenha.type = estaOculta ? "text" : "password";
    btnAlternarSenha.textContent = estaOculta ? "Ocultar" : "Mostrar";
  });

  const exibirMensagem = (texto, tipo) => {
    mensagemLogin.textContent = texto;
    mensagemLogin.className = `mensagem-login ${tipo}`;
  };

  formLogin.addEventListener("submit", (event) => {
    event.preventDefault();

    const loginDigitado = inputUsuario.value.trim().toLowerCase();
    const senhaDigitada = inputSenha.value;

    if (!loginDigitado || !senhaDigitada) {
      exibirMensagem("Preencha o login e a senha para continuar.", "erro");
      return;
    }

    const contaEncontrada = USUARIOS_INICIAIS.find(
      (u) => u.login === loginDigitado && u.senha === senhaDigitada
    );

    if (!contaEncontrada) {
      exibirMensagem("Login ou senha inválidos. Tente novamente.", "erro");
      return;
    }

    localStorage.setItem(
      "malsentof_sessao_ativa",
      JSON.stringify({
        login: contaEncontrada.login,
        role: contaEncontrada.role,
        nomeExibicao: contaEncontrada.nomeExibicao,
        autenticadoEm: new Date().toISOString()
      })
    );

    const destino = ROTA_POR_ROLE[contaEncontrada.role] || "montador.html";

    exibirMensagem(
      `Acesso liberado como ${contaEncontrada.role.toUpperCase()}. Redirecionando para o montador...`,
      "sucesso"
    );

    setTimeout(() => {
      window.location.href = destino;
    }, 500);
  });
});