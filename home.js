document.addEventListener("DOMContentLoaded", () => {
  const barraTopo = document.getElementById("barraTopo");
  const secoes = document.querySelectorAll("main section[id]");
  const linksNav = document.querySelectorAll('.nav-principal a[href^="#"]');

  const atualizarEstadoRolagem = () => {
    // Intensifica o efeito translúcido do cabeçalho fixo ao rolar
    if (barraTopo) {
      barraTopo.classList.toggle("rolando", window.scrollY > 24);
    }

    // Marca a seção atual na navegação
    const posicaoAtual = window.scrollY + 140;
    let secaoAtivaId = "";

    secoes.forEach((secao) => {
      const topo = secao.offsetTop;
      const altura = secao.offsetHeight;
      if (posicaoAtual >= topo && posicaoAtual < topo + altura) {
        secaoAtivaId = secao.getAttribute("id");
      }
    });

    linksNav.forEach((link) => {
      const alvo = link.getAttribute("href").replace("#", "");
      link.classList.toggle("ativo", alvo === secaoAtivaId);
    });
  };

  window.addEventListener("scroll", atualizarEstadoRolagem, { passive: true });
  atualizarEstadoRolagem();
});