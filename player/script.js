const PONTOS_INICIAIS = 9;
const LIMITE_INICIAL_ATRIBUTO = 3;
const ORCAMENTO_INICIAL = 20000;
const PESO_BASE_CARGA = 10;

const SUMARIO_OFICIAL = [
  { id: "campanha", titulo: "Campanha", paginasLabel: "Pág. 1", pdfInicio: 1, pdfFim: 1, subtopicos: [{ nome: "Contexto Mundial", pdfPag: 1 }] },
  {
    id: "ficha", titulo: "Informações da Ficha", paginasLabel: "Pág. 2–6", pdfInicio: 2, pdfFim: 6,
    subtopicos: [
      { nome: "Arquétipo e Vida", pdfPag: 2 },
      { nome: "E.E. e Carga", pdfPag: 3 },
      { nome: "Resistências", pdfPag: 4 },
      { nome: "Deslocamento e Iniciativa", pdfPag: 5 }
    ]
  },
  {
    id: "alma", titulo: "Alma e E.E.", paginasLabel: "Pág. 7–19", pdfInicio: 7, pdfFim: 19,
    subtopicos: [
      { nome: "Atributos", pdfPag: 7 },
      { nome: "Perícias", pdfPag: 9 },
      { nome: "Fluxos", pdfPag: 15 },
      { nome: "E.E. Avançada", pdfPag: 16 }
    ]
  },
  {
    id: "despertar", titulo: "Despertar", paginasLabel: "Pág. 19–22", pdfInicio: 19, pdfFim: 22,
    subtopicos: [
      { nome: "Como Despertar", pdfPag: 19 },
      { nome: "Tabela de XP", pdfPag: 21 },
      { nome: "Bênção Divina", pdfPag: 22 }
    ]
  },
  {
    id: "arquetipos", titulo: "Arquétipos", paginasLabel: "Pág. 23–34", pdfInicio: 23, pdfFim: 34,
    subtopicos: [
      { nome: "Despertados", pdfPag: 23 },
      { nome: "Sintéticos", pdfPag: 25 },
      { nome: "Experimentos", pdfPag: 26 },
      { nome: "Aberrações", pdfPag: 31 }
    ]
  },
  {
    id: "classes", titulo: "Classes", paginasLabel: "Pág. 35–57", pdfInicio: 35, pdfFim: 57,
    subtopicos: [
      { nome: "Regras", pdfPag: 35 },
      { nome: "Atirador", pdfPag: 37 },
      { nome: "Espadachim", pdfPag: 38 },
      { nome: "Samurai", pdfPag: 39 },
      { nome: "Assassino", pdfPag: 39 },
      { nome: "Ladrão", pdfPag: 40 },
      { nome: "Bárbaro", pdfPag: 41 },
      { nome: "Lutador", pdfPag: 41 },
      { nome: "Monge", pdfPag: 43 },
      { nome: "Mago", pdfPag: 49 },
      { nome: "Artífice", pdfPag: 49 },
      { nome: "Tanque", pdfPag: 50 },
      { nome: "Caçador", pdfPag: 51 },
      { nome: "Investigador", pdfPag: 51 }
    ]
  },
  {
    id: "itens", titulo: "Itens, Armas & Danos", paginasLabel: "Pág. 116–168", pdfInicio: 116, pdfFim: 168,
    subtopicos: [
      { nome: "Distância (Corte/Fogo)", pdfPag: 116 },
      { nome: "Munições", pdfPag: 117 },
      { nome: "Corpo a Corpo", pdfPag: 118 },
      { nome: "Equipamentos", pdfPag: 120 },
      { nome: "Defesa", pdfPag: 121 },
      { nome: "Durabilidade", pdfPag: 133 },
      { nome: "Tipos de Dano", pdfPag: 138 }
    ]
  },
  {
    id: "mecanicas", titulo: "Mecânicas", paginasLabel: "Pág. 169–193", pdfInicio: 169, pdfFim: 193,
    subtopicos: [
      { nome: "Combate", pdfPag: 169 },
      { nome: "Choques", pdfPag: 171 },
      { nome: "Evasão", pdfPag: 180 },
      { nome: "Parry", pdfPag: 181 }
    ]
  }
];

// ================= CATEGORIAS DO DROPDOWN DE ARMAS =================
const TOPICOS_ARMAS = [
  {
    id: "todas",
    label: "Todas as Armas",
    tituloCompleto: "Todas as Armas do Compêndio",
    descricao: "Catálogo completo com Distância de Corte, Distância de Fogo, Corpo a Corpo de Corte e Corpo a Corpo de Impacto."
  },
  {
    id: "dist_corte",
    label: "Distância de Corte",
    tituloCompleto: "Armas de Ataque à Distância de Corte",
    descricao: "Curta distância: até 10m | Média: até 40m | Longa: até 100m. Exigem munição na aba Munições."
  },
  {
    id: "dist_fogo",
    label: "Distância de Fogo",
    tituloCompleto: "Armas de Ataque à Distância de Fogo",
    descricao: "P = Pesada, M = Média, L = Leve. Exigem munição na aba Munições."
  },
  {
    id: "cac_corte",
    label: "Corpo a Corpo (Corte)",
    tituloCompleto: "Armas de Ataque Corpo a Corpo de Corte",
    descricao: "Não exigem munição. Causam sangramento ao superar resistência física (hemorragia no crítico)."
  },
  {
    id: "cac_impacto",
    label: "Corpo a Corpo (Impacto)",
    tituloCompleto: "Armas de Ataque Corpo a Corpo de Impacto",
    descricao: "Não exigem munição. Causam Concussão no crítico e dano dobrado na durabilidade de defesas de corpo."
  }
];

const CATALOGO_ARMAS = [
  { id: "arco", nome: "Arco", topico: "dist_corte", estilo: "distancia", porte: "L", dano: "d8 + sangramento", tipoDano: "Média e longa distância", peso: 1, carga: "1 flecha", durabilidade: 100, preco: 800, municaoId: "mun_arco" },
  { id: "besta", nome: "Besta", topico: "dist_corte", estilo: "distancia", porte: "M", dano: "d10 + sangramento", tipoDano: "Curta e média distância", peso: 3, carga: "1 seta", durabilidade: 80, preco: 1000, municaoId: "mun_besta" },
  { id: "zarabatana", nome: "Zarabatana", topico: "dist_corte", estilo: "distancia", porte: "L", dano: "d6 + sangramento", tipoDano: "Curta distância", peso: 1, carga: "1 dardo", durabilidade: 130, preco: 600, municaoId: "mun_zarabatana" },
  { id: "armas_arremesso", nome: "Armas de arremesso", topico: "dist_corte", estilo: "distancia", porte: "L", dano: "d6 + sangramento", tipoDano: "Curta e média distância", peso: 1, carga: "Arremesso", durabilidade: 130, preco: 50, obsPreco: "R$ 50 cada", municaoId: "mun_arremesso" },

  { id: "bazuca", nome: "Bazuca", topico: "dist_fogo", estilo: "fogo", porte: "P", dano: "6d20+8d10+2d4", tipoDano: "P de alcance Longo", peso: 60, carga: "1", durabilidade: 10, preco: 300000, municaoId: "mun_bazuca" },
  { id: "rpg7", nome: "RPG-7", topico: "dist_fogo", estilo: "fogo", porte: "P", dano: "6d12+6d8+2d4", tipoDano: "P de alcance médio", peso: 10, carga: "1", durabilidade: 20, preco: 50000, municaoId: "mun_rpg7" },
  { id: "escopeta", nome: "Escopeta", topico: "dist_fogo", estilo: "fogo", porte: "P", dano: "2d10", tipoDano: "P de alcance médio", peso: 5, carga: "12", durabilidade: 250, preco: 31808, municaoId: "mun_escopeta" },
  { id: "escopeta_cano_duplo", nome: "Escopeta de Cano Duplo", topico: "dist_fogo", estilo: "fogo", porte: "P", dano: "2d15", tipoDano: "P de alcance médio", peso: 5, carga: "2", durabilidade: 170, preco: 8668, municaoId: "mun_escopeta" },
  { id: "escopeta_serrada", nome: "Esc. cano duplo serrada", topico: "dist_fogo", estilo: "fogo", porte: "M", dano: "3d15", tipoDano: "M de alcance curto", peso: 3, carga: "2", durabilidade: 80, preco: 4968, municaoId: "mun_escopeta" },
  { id: "escopeta_tatica", nome: "Escopeta Tática", topico: "dist_fogo", estilo: "fogo", porte: "P", dano: "2d12", tipoDano: "P de alcance médio", peso: 5, carga: "8", durabilidade: 200, preco: 25372, municaoId: "mun_escopeta" },
  { id: "lanca_chamas", nome: "Lança-chamas", topico: "dist_fogo", estilo: "fogo", porte: "P", dano: "4d10+2d6+4d4", tipoDano: "P de alcance curto", peso: 15, carga: "1 galão", durabilidade: 100, preco: 6100, municaoId: "mun_lanca_chamas" },
  { id: "pistola", nome: "Pistola", topico: "dist_fogo", estilo: "fogo", porte: "L", dano: "2d8", tipoDano: "L de alcance médio", peso: 1, carga: "8", durabilidade: 250, preco: 8534, municaoId: "mun_pistola" },
  { id: "revolver", nome: "Revólver", topico: "dist_fogo", estilo: "fogo", porte: "L", dano: "2d10", tipoDano: "L de alcance médio", peso: 2, carga: "5", durabilidade: 200, preco: 6750, municaoId: "mun_revolver" },
  { id: "magnum", nome: "Magnum", topico: "dist_fogo", estilo: "fogo", porte: "M", dano: "2d12", tipoDano: "M de alcance longo", peso: 3, carga: "6", durabilidade: 170, preco: 15750, municaoId: "mun_magnum" },
  { id: "rifle_batalha", nome: "Rifle de Batalha", topico: "dist_fogo", estilo: "fogo", porte: "P", dano: "X(3d6)", tipoDano: "P de alcance longo", peso: 7, carga: "24", durabilidade: 70, preco: 64650, municaoId: "mun_rifle_batalha" },
  { id: "rifle_assalto", nome: "Rifle de Assalto", topico: "dist_fogo", estilo: "fogo", porte: "M", dano: "X(3d4)", tipoDano: "M de alcance longo", peso: 5, carga: "30", durabilidade: 130, preco: 35810, municaoId: "mun_rifle_assalto" },
  { id: "smgs", nome: "SMGs", topico: "dist_fogo", estilo: "fogo", porte: "M", dano: "Xd10", tipoDano: "M de alcance médio", peso: 3, carga: "12", durabilidade: 200, preco: 10600, municaoId: "mun_smg" },
  { id: "rifle_precisao", nome: "Rifle de Precisão*", topico: "dist_fogo", estilo: "fogo", porte: "P", dano: "5d10", tipoDano: "P de alcance longo (1 rod. mira)", peso: 15, carga: "5", durabilidade: 50, preco: 36400, municaoId: "mun_rifle_precisao" },
  { id: "rifle_caca", nome: "Rifle de Caça*", topico: "dist_fogo", estilo: "fogo", porte: "M", dano: "3d6", tipoDano: "M de alcance longo (1 rod. mira)", peso: 5, carga: "7", durabilidade: 110, preco: 13150, municaoId: "mun_rifle_caca" },

  { id: "adaga", nome: "Adaga", topico: "cac_corte", estilo: "corte", porte: "L", dano: "d6", tipoDano: "Leve (Curto) • Corte", peso: 1, durabilidade: 100, preco: 2900 },
  { id: "alabarda", nome: "Alabarda", topico: "cac_corte", estilo: "corte", porte: "M", dano: "d12", tipoDano: "Média (Longo alcance) • Corte", peso: 2, durabilidade: 70, preco: 4000 },
  { id: "bisarma", nome: "Bisarma", topico: "cac_corte", estilo: "corte", porte: "M", dano: "d10", tipoDano: "Média (Longo alcance) • Corte", peso: 2, durabilidade: 80, preco: 3800 },
  { id: "chakram", nome: "Chakram*", topico: "cac_corte", estilo: "corte", porte: "L", dano: "d10", tipoDano: "Leve • Corte (Des + Luta)", peso: 1, durabilidade: 80, preco: 3900 },
  { id: "cimitarra", nome: "Cimitarra", topico: "cac_corte", estilo: "corte", porte: "M", dano: "d10", tipoDano: "Média • Corte", peso: 2, durabilidade: 80, preco: 3800 },
  { id: "dardo_corda", nome: "Dardo e corda**", topico: "cac_corte", estilo: "corte", porte: "L", dano: "2d12", tipoDano: "Leve (Longo alcance) • Corte", peso: 1, durabilidade: 70, preco: 8300 },
  { id: "espada_curta", nome: "Espada Curta", topico: "cac_corte", estilo: "corte", porte: "L", dano: "d8", tipoDano: "Leve (Curto) • Corte", peso: 1, durabilidade: 100, preco: 3900 },
  { id: "espada_media", nome: "Espada Média", topico: "cac_corte", estilo: "corte", porte: "M", dano: "d10", tipoDano: "Média • Corte", peso: 2, durabilidade: 80, preco: 3800 },
  { id: "espada_longa", nome: "Espada Longa", topico: "cac_corte", estilo: "corte", porte: "P", dano: "d12", tipoDano: "Pesada (Longo alcance) • Corte", peso: 3, durabilidade: 70, preco: 3900 },
  { id: "espada_colossal", nome: "Espada Colossal", topico: "cac_corte", estilo: "corte", porte: "P", dano: "2d8", tipoDano: "Pesada (Longo alcance) • Corte", peso: 4, durabilidade: 40, preco: 2800 },
  { id: "estrela_manha", nome: "Estrela da Manhã", topico: "cac_corte", estilo: "corte", porte: "M", dano: "3d4", tipoDano: "Média • Corte", peso: 2, durabilidade: 70, preco: 4000 },
  { id: "faca", nome: "Faca", topico: "cac_corte", estilo: "corte", porte: "L", dano: "d4", tipoDano: "Leve (Curto) • Corte", peso: 1, durabilidade: 130, preco: 2500 },
  { id: "foice", nome: "Foice", topico: "cac_corte", estilo: "corte", porte: "L", dano: "d8", tipoDano: "Leve • Corte", peso: 1, durabilidade: 80, preco: 3100 },
  { id: "foice_grande", nome: "Foice Grande", topico: "cac_corte", estilo: "corte", porte: "M", dano: "2d6", tipoDano: "Média (Longo alcance) • Corte", peso: 2, durabilidade: 70, preco: 4000 },
  { id: "foice_gigante", nome: "Foice Gigante", topico: "cac_corte", estilo: "corte", porte: "P", dano: "4d4", tipoDano: "Pesada (Longo alcance) • Corte", peso: 3, durabilidade: 50, preco: 3700 },
  { id: "garras_punho", nome: "Garras de Punho", topico: "cac_corte", estilo: "corte", porte: "M", dano: "2d4", tipoDano: "Média (Curto) • Corte", peso: 2, durabilidade: 100, preco: 3800 },
  { id: "wakizashi", nome: "Wakizashi", topico: "cac_corte", estilo: "corte", porte: "L", dano: "d8", tipoDano: "Leve (Curto) • Corte", peso: 1, durabilidade: 130, preco: 5100 },
  { id: "katana", nome: "Katana", topico: "cac_corte", estilo: "corte", porte: "M", dano: "d10", tipoDano: "Média • Corte", peso: 2, durabilidade: 80, preco: 3800 },
  { id: "kukri", nome: "Kukri", topico: "cac_corte", estilo: "corte", porte: "L", dano: "d8", tipoDano: "Leve (Curto) • Corte", peso: 1, durabilidade: 100, preco: 3900 },
  { id: "kusarigama", nome: "Kusarigama**", topico: "cac_corte", estilo: "corte", porte: "L", dano: "2d12", tipoDano: "Leve (Longo alcance) • Corte", peso: 1, durabilidade: 70, preco: 8300 },
  { id: "lamina_dupla", nome: "Lâmina Dupla*", topico: "cac_corte", estilo: "corte", porte: "L", dano: "4d4", tipoDano: "Leve • Corte (Des + Luta)", peso: 2, durabilidade: 50, preco: 3800 },
  { id: "lanca", nome: "Lança", topico: "cac_corte", estilo: "corte", porte: "M", dano: "d10", tipoDano: "Média (Longo alcance) • Corte", peso: 2, durabilidade: 80, preco: 3800 },
  { id: "leque_ferro", nome: "Leque de Ferro*", topico: "cac_corte", estilo: "corte", porte: "L", dano: "d10", tipoDano: "Leve (Curto) • Corte", peso: 1, durabilidade: 100, preco: 4900 },
  { id: "machadinha", nome: "Machadinha", topico: "cac_corte", estilo: "corte", porte: "L", dano: "d6", tipoDano: "Leve (Curto) • Corte", peso: 1, durabilidade: 130, preco: 3800 },
  { id: "machado_normal", nome: "Machado Normal", topico: "cac_corte", estilo: "corte", porte: "M", dano: "d10", tipoDano: "Média • Corte", peso: 2, durabilidade: 80, preco: 3800 },
  { id: "machado_grande", nome: "Machado Grande", topico: "cac_corte", estilo: "corte", porte: "P", dano: "d12", tipoDano: "Pesada (Longo alcance) • Corte", peso: 3, durabilidade: 70, preco: 3900 },
  { id: "picareta", nome: "Picareta", topico: "cac_corte", estilo: "corte", porte: "P", dano: "d10", tipoDano: "Pesada • Corte", peso: 3, durabilidade: 80, preco: 3700 },
  { id: "rapieira", nome: "Rapieira", topico: "cac_corte", estilo: "corte", porte: "L", dano: "d8", tipoDano: "Leve • Corte", peso: 1, durabilidade: 100, preco: 3900 },
  { id: "sai", nome: "Sai", topico: "cac_corte", estilo: "corte", porte: "L", dano: "d8", tipoDano: "Leve (Curto) • Corte", peso: 1, durabilidade: 100, preco: 3900 },
  { id: "serra_eletrica", nome: "Serra Elétrica", topico: "cac_corte", estilo: "corte", porte: "P", dano: "4d6", tipoDano: "Pesada • Corte", peso: 7, durabilidade: 30, preco: 2900 },
  { id: "tesoura", nome: "Tesoura", topico: "cac_corte", estilo: "corte", porte: "L", dano: "d4", tipoDano: "Leve (Curto) • Corte", peso: 1, durabilidade: 130, preco: 2500 },
  { id: "tridente", nome: "Tridente", topico: "cac_corte", estilo: "corte", porte: "M", dano: "d10", tipoDano: "Média (Longo alcance) • Corte", peso: 2, durabilidade: 80, preco: 3800 },

  { id: "bastao", nome: "Bastão / Cassetete", topico: "cac_impacto", estilo: "impacto", porte: "M", dano: "d8", tipoDano: "Média (Curto) • Impacto", peso: 2, durabilidade: 150, preco: 5800 },
  { id: "caestus", nome: "Caestus", topico: "cac_impacto", estilo: "impacto", porte: "L", dano: "d6", tipoDano: "Leve (Curto) • Impacto", peso: 1, durabilidade: 90, preco: 2600 },
  { id: "cajado_bo", nome: "Cajado Bô", topico: "cac_impacto", estilo: "impacto", porte: "L", dano: "d10", tipoDano: "Leve (Longo alcance) • Impacto", peso: 1, durabilidade: 110, preco: 5400 },
  { id: "chicote", nome: "Chicote*", topico: "cac_impacto", estilo: "impacto", porte: "L", dano: "d10", tipoDano: "Leve (Longo alcance) • Impacto", peso: 1, durabilidade: 90, preco: 4400 },
  { id: "clava", nome: "Clava", topico: "cac_impacto", estilo: "impacto", porte: "M", dano: "4d4", tipoDano: "Média (Curto) • Impacto", peso: 4, durabilidade: 60, preco: 4400 },
  { id: "corrente", nome: "Corrente* (1m)", topico: "cac_impacto", estilo: "impacto", porte: "L", dano: "d10", tipoDano: "Leve (Longo alcance) • Impacto", peso: 1, durabilidade: 90, preco: 20, obsPreco: "R$ 20/metro" },
  { id: "espada_curta_sf", nome: "Espada Curta (Sem fio)", topico: "cac_impacto", estilo: "impacto", porte: "L", dano: "d6", tipoDano: "Leve (Curto) • Impacto", peso: 1, durabilidade: 150, preco: 4400 },
  { id: "espada_media_sf", nome: "Espada Média (Sem fio)", topico: "cac_impacto", estilo: "impacto", porte: "M", dano: "d8", tipoDano: "Média • Impacto", peso: 2, durabilidade: 110, preco: 4200 },
  { id: "espada_longa_sf", nome: "Espada Longa (Sem fio)", topico: "cac_impacto", estilo: "impacto", porte: "P", dano: "d10", tipoDano: "Pesada (Longo alcance) • Impacto", peso: 3, durabilidade: 90, preco: 4200 },
  { id: "machado_normal_imp", nome: "Machado Normal (Impacto)", topico: "cac_impacto", estilo: "impacto", porte: "M", dano: "d10", tipoDano: "Média • Impacto", peso: 2, durabilidade: 80, preco: 3800 },
  { id: "martelo", nome: "Martelo", topico: "cac_impacto", estilo: "impacto", porte: "L", dano: "d8", tipoDano: "Leve (Curto) • Impacto", peso: 1, durabilidade: 110, preco: 4300 },
  { id: "marreta", nome: "Marreta", topico: "cac_impacto", estilo: "impacto", porte: "M", dano: "d10", tipoDano: "Médio • Impacto", peso: 2, durabilidade: 90, preco: 4300 },
  { id: "martelo_guerra", nome: "Martelo de Guerra", topico: "cac_impacto", estilo: "impacto", porte: "P", dano: "d12", tipoDano: "Pesada (Longo alcance) • Impacto", peso: 3, durabilidade: 80, preco: 4500 },
  { id: "maca", nome: "Maça", topico: "cac_impacto", estilo: "impacto", porte: "P", dano: "4d4", tipoDano: "Pesada (Longo alcance) • Impacto", peso: 4, durabilidade: 60, preco: 6000 },
  { id: "nunchaku", nome: "Nunchaku*", topico: "cac_impacto", estilo: "impacto", porte: "L", dano: "3d4", tipoDano: "Leve (Curto) • Impacto", peso: 1, durabilidade: 80, preco: 4700 },
  { id: "nunchaku_macico", nome: "Nunchaku Metal Maciço**", topico: "cac_impacto", estilo: "impacto", porte: "P", dano: "d20", tipoDano: "Pesado • Impacto", peso: 5, durabilidade: 50, preco: 4500 },
  { id: "soco_ingles", nome: "Soco Inglês", topico: "cac_impacto", estilo: "impacto", porte: "L", dano: "2d6", tipoDano: "Leve (Curto) • Impacto", peso: 1, durabilidade: 110, preco: 6500 },
  { id: "tonfa", nome: "Tonfa*", topico: "cac_impacto", estilo: "impacto", porte: "M", dano: "d10", tipoDano: "Médio • Impacto", peso: 2, durabilidade: 90, preco: 4300 }
];

// ================= MUNIÇÕES BASE & ESPECIAIS =================
const CATALOGO_MUNICOES = [
  { id: "mun_arco", categoria: "corte", armasCompat: ["arco"], nome: "Flechas (Aljava)", unidade: "aljava", unidadePlural: "aljavas", peso: 1, maxCarregar: 3, qtdPorKit: "30 flechas por aljava", espaco: 0, preco: 40 },
  { id: "mun_besta", categoria: "corte", armasCompat: ["besta"], nome: "Setas de Besta (Kit)", unidade: "kit", unidadePlural: "kits", peso: 1, maxCarregar: 8, qtdPorKit: "20 setas por kit", espaco: 0, preco: 50 },
  { id: "mun_zarabatana", categoria: "corte", armasCompat: ["zarabatana"], nome: "Dardos de Zarabatana (Kit)", unidade: "kit", unidadePlural: "kits", peso: 1, maxCarregar: 8, qtdPorKit: "15 dardos por kit", espaco: 0, preco: 30 },
  { id: "mun_arremesso", categoria: "corte", armasCompat: ["armas_arremesso"], nome: "Arremessáveis Extras (Kit)", unidade: "kit", unidadePlural: "kits", peso: 2, maxCarregar: 5, qtdPorKit: "10 itens por kit (R$ 50 cada)", espaco: 0, preco: 50 },
  { id: "mun_bazuca", categoria: "fogo", armasCompat: ["bazuca"], nome: "Ogiva de Bazuca (Unidade)", unidade: "carga", unidadePlural: "cargas", peso: 10, maxCarregar: 1, qtdPorKit: "1 disparo por unidade", espaco: 3, preco: 15500 },
  { id: "mun_rpg7", categoria: "fogo", armasCompat: ["rpg7"], nome: "Foguete RPG-7 (Unidade)", unidade: "carga", unidadePlural: "cargas", peso: 2, maxCarregar: 2, qtdPorKit: "1 disparo por unidade", espaco: 2, preco: 2500 },
  { id: "mun_escopeta", categoria: "fogo", armasCompat: ["escopeta", "escopeta_cano_duplo", "escopeta_serrada", "escopeta_tatica"], nome: "Cartuchos Calibre .12 (Caixa)", unidade: "caixa", unidadePlural: "caixas", peso: 1, maxCarregar: 4, qtdPorKit: "6 cartuchos por caixa", espaco: 4, preco: 390 },
  { id: "mun_lanca_chamas", categoria: "fogo", armasCompat: ["lanca_chamas"], nome: "Combustível Lança-Chamas (Galão)", unidade: "galão", unidadePlural: "galões", peso: 2, maxCarregar: 4, qtdPorKit: "10 disparos por galão", espaco: 5, preco: 255 },
  { id: "mun_pistola", categoria: "fogo", armasCompat: ["pistola"], nome: "Munição 9mm — Pistola (Caixa)", unidade: "caixa", unidadePlural: "caixas", peso: 1, maxCarregar: 3, qtdPorKit: "12 projéteis por caixa", espaco: 4, preco: 185 },
  { id: "mun_revolver", categoria: "fogo", armasCompat: ["revolver"], nome: "Munição Calibre .38 — Revólver (Caixa)", unidade: "caixa", unidadePlural: "caixas", peso: 1, maxCarregar: 3, qtdPorKit: "10 projéteis por caixa", espaco: 4, preco: 237 },
  { id: "mun_magnum", categoria: "fogo", armasCompat: ["magnum"], nome: "Munição Calibre .44 — Magnum (Caixa)", unidade: "caixa", unidadePlural: "caixas", peso: 1, maxCarregar: 2, qtdPorKit: "12 projéteis por caixa", espaco: 4, preco: 702 },
  { id: "mun_rifle_batalha", categoria: "fogo", armasCompat: ["rifle_batalha"], nome: "Munição 7,62×51mm NATO (Caixa)", unidade: "caixa", unidadePlural: "caixas", peso: 3, maxCarregar: 1, qtdPorKit: "48 cartuchos por caixa", espaco: 4, preco: 3197 },
  { id: "mun_rifle_assalto", categoria: "fogo", armasCompat: ["rifle_assalto"], nome: "Munição 5,56×45mm (Caixa)", unidade: "caixa", unidadePlural: "caixas", peso: 2, maxCarregar: 1, qtdPorKit: "60 cartuchos por caixa", espaco: 4, preco: 1725 },
  { id: "mun_smg", categoria: "fogo", armasCompat: ["smgs"], nome: "Munição 9mm — SMGs (Caixa)", unidade: "caixa", unidadePlural: "caixas", peso: 1, maxCarregar: 2, qtdPorKit: "12 projéteis por caixa", espaco: 4, preco: 185 },
  { id: "mun_rifle_precisao", categoria: "fogo", armasCompat: ["rifle_precisao"], nome: "Munição .50 BMG — Precisão (Caixa)", unidade: "caixa", unidadePlural: "caixas", peso: 2, maxCarregar: 2, qtdPorKit: "10 projéteis por caixa", espaco: 4, preco: 1795 },
  { id: "mun_rifle_caca", categoria: "fogo", armasCompat: ["rifle_caca"], nome: "Munição .30-06 Springfield (Caixa)", unidade: "caixa", unidadePlural: "caixas", peso: 1, maxCarregar: 2, qtdPorKit: "14 projéteis por caixa", espaco: 4, preco: 602 }
];

const CATALOGO_MUNICOES_ESPECIAIS = [
  { id: "esp_explosiva", nome: "Munição Explosiva (Caixa)", portesCompat: ["L"], regraPorte: "Exclusiva para armas de fogo Leves (Pistola, Revólver)", efeito: "Explode ao tocar no alvo e causa dano de fogo (X + 2d4)", peso: 2, maxCarregar: 3, qtdPorCx: "6 projéteis por caixa", espaco: 4, adicionalPreco: 500 },
  { id: "esp_toxica", nome: "Munição Tóxica (Caixa)", portesCompat: ["L"], regraPorte: "Exclusiva para armas de fogo Leves (Pistola, Revólver)", efeito: "Emite fumaça tóxica no impacto (X + 4d4)", peso: 2, maxCarregar: 2, qtdPorCx: "4 projéteis por caixa", espaco: 4, adicionalPreco: 200 },
  { id: "esp_impacto", nome: "Munição de Impacto (Caixa)", portesCompat: ["L", "M"], regraPorte: "Compatível com armas de fogo Leves e Médias", efeito: "Causa dano de impacto padrão no alvo", peso: 2, maxCarregar: 3, qtdPorCx: "12 projéteis por caixa", espaco: 4, adicionalPreco: 200 },
  { id: "esp_serrilhada", nome: "Munição Serrilhada (Caixa)", portesCompat: ["L", "M", "P"], regraPorte: "Compatível com armas de fogo (Leves, Médias e Pesadas)", efeito: "Causa dano normal + sangramento (X + d4); no crítico causa hemorragia (X + 2d4)", peso: 3, maxCarregar: 2, qtdPorCx: "6 projéteis por caixa", espaco: 4, adicionalPreco: 400 },
  { id: "esp_eletromag", nome: "Munição Eletromagnética (Caixa)", portesCompat: ["L", "M", "P"], regraPorte: "Compatível com armas de fogo (Leves, Médias e Pesadas)", efeito: "Causa perturbações e mau funcionamento em aparelhos, BIOs e DATs", peso: 4, maxCarregar: 1, qtdPorCx: "5 projéteis por caixa", espaco: 4, adicionalPreco: 300 }
];

// ================= DEFESA =================
const TOPICOS_DEFESA = [
  { id: "cortante", label: "Def. Cortante" },
  { id: "impacto", label: "Def. Impacto" },
  { id: "perfurante", label: "Def. Perfurante" },
  { id: "excecao", label: "Exceções" }
];

const CATALOGO_DEFESA = [
  { id: "do_maru", nome: "Dō-maru (Samurai leve)", cat: "cortante", dano: "Def 2/0/1 (C/P/I)", tipoDano: "Cortante • Durab. 50", peso: 1, preco: 1400 },
  { id: "cota_malha", nome: "Cota de malha", cat: "cortante", dano: "Def 2/0/1 (C/P/I)", tipoDano: "Cortante • Durab. 100", peso: 2, preco: 2800 },
  { id: "casaco_anti_lamina", nome: "Casaco anti-lâmina", cat: "cortante", dano: "Def 3/0/1 (C/P/I)", tipoDano: "Cortante • Durab. 50", peso: 1, preco: 1900 },
  { id: "sobretudo_contencao", nome: "Sobretudo de contenção", cat: "cortante", dano: "Def 4/1/2 • -1 Agi", tipoDano: "Cortante • Durab. 100", peso: 2, preco: 6300 },
  { id: "o_yoroi", nome: "Ō-yoroi (Samurai pesada)", cat: "cortante", dano: "Def 5/1/2 • -1 Agi", tipoDano: "Cortante • Durab. 100", peso: 3, preco: 7200 },
  { id: "blusao_industrial", nome: "Blusão de proteção industrial", cat: "cortante", dano: "Def 6/1/3 • -2 Agi", tipoDano: "Cortante • Durab. 100", peso: 2, preco: 9300 },
  { id: "placas_osso", nome: "Placas de osso", cat: "cortante", dano: "Def 5/1/2 • -2 Agi", tipoDano: "Cortante • Durab. 150", peso: 3, preco: 11200 },
  { id: "placas_carbono", nome: "Placas de carbono", cat: "cortante", dano: "Def 8/2/4 • -2 Agi", tipoDano: "Cortante • Durab. 100", peso: 4, preco: 13100 },
  { id: "placas_metal", nome: "Placas de metal", cat: "cortante", dano: "Def 5/1/2 • -1 Agi", tipoDano: "Cortante • Durab. 200", peso: 6, preco: 14900 },
  { id: "gambeson_leve", nome: "Gambeson leve", cat: "impacto", dano: "Def 0/1/2 (C/P/I)", tipoDano: "Impacto • Durab. 50", peso: 1, preco: 1400 },
  { id: "uniforme_antibal_leve", nome: "Uniforme antibalístico leve", cat: "impacto", dano: "Def 1/2/4 (C/P/I)", tipoDano: "Impacto • Durab. 50", peso: 4, preco: 3100 },
  { id: "gambeson_reforcado", nome: "Gambeson reforçado", cat: "impacto", dano: "Def 0/1/3 (C/P/I)", tipoDano: "Impacto • Durab. 100", peso: 2, preco: 3800 },
  { id: "couro_endurecido", nome: "Couro endurecido", cat: "impacto", dano: "Def 1/2/4 • -1 Agi", tipoDano: "Impacto • Durab. 100", peso: 3, preco: 6200 },
  { id: "acolchoado_tatico", nome: "Acolchoado tático", cat: "impacto", dano: "Def 2/4/8 • -1 Agi", tipoDano: "Impacto • Durab. 100", peso: 6, preco: 8900 },
  { id: "acolchoado_cinetico", nome: "Acolchoado cinético", cat: "impacto", dano: "Def 1/3/6 • -1 Agi", tipoDano: "Impacto • Durab. 100", peso: 4, preco: 9100 },
  { id: "brigandina", nome: "Brigandina", cat: "impacto", dano: "Def 1/2/5 (C/P/I)", tipoDano: "Impacto • Durab. 150", peso: 4, preco: 11600 },
  { id: "macacao_anti_impacto", nome: "Macacão anti-impacto industrial", cat: "impacto", dano: "Def 1/3/6 • -1 Agi", tipoDano: "Impacto • Durab. 150", peso: 5, preco: 14000 },
  { id: "colete_seg_urbana", nome: "Colete de segurança urbana c/ placas", cat: "perfurante", dano: "Def 1/2/0 (C/P/I)", tipoDano: "Perfurante • Durab. 100", peso: 1, preco: 2900 },
  { id: "fibra_ultraleve", nome: "Fibra ultraleve (Polietileno)", cat: "perfurante", dano: "Def 3/6/1 (+1 bolso cx munição)", tipoDano: "Perfurante • Durab. 40", peso: 2, preco: 3800 },
  { id: "kevlar_placas", nome: "Kevlar com placas", cat: "perfurante", dano: "Def 2/4/1 • -1 Agi", tipoDano: "Perfurante • Durab. 100", peso: 2, preco: 6300 },
  { id: "sobretudo_militar", nome: "Sobretudo de contenção militar", cat: "perfurante", dano: "Def 4/8/2 • -2 Agi (+2 bolsos cx)", tipoDano: "Perfurante • Durab. 100", peso: 3, preco: 13200 },
  { id: "armadura_escamada", nome: "Armadura escamada", cat: "perfurante", dano: "Def 3/6/1 • -1 Agi (+2 bolsos cx)", tipoDano: "Perfurante • Durab. 200", peso: 3, preco: 19200 },
  { id: "gel_balistico", nome: "Gel balístico (leve)", cat: "excecao", dano: "Def 1/4/2 (C/P/I)", tipoDano: "Exceção • Durab. 20", peso: 2, preco: 500 },
  { id: "armadura_liquida", nome: "Armadura líquida (protótipo)", cat: "excecao", dano: "Def 2/8/4 (C/P/I)", tipoDano: "Exceção • Durab. 50", peso: 3, preco: 6700 },
  { id: "armadura_ceramica", nome: "Armadura de cerâmica", cat: "excecao", dano: "Def 4/4/2 • -1 Agi", tipoDano: "Exceção • Durab. 100", peso: 6, preco: 8900 },
  { id: "nanofibra_dispersao", nome: "Nanofibra de dispersão", cat: "excecao", dano: "Def 1/6/3 (C/P/I)", tipoDano: "Exceção • Durab. 100", peso: 4, preco: 9600 }
];

// ================= EQUIPAMENTOS OPCIONAIS =================
const TOPICOS_EQUIPAMENTOS = [
  { id: "tatico", label: "Granadas & Molotov" },
  { id: "armazenamento", label: "Armazenamento (Mochilas/Bolsas)" },
  { id: "utilitario", label: "Utilitários & Recarga" },
  { id: "escudos", label: "Escudos (Opcional)" }
];

const CATALOGO_EQUIPAMENTOS = [
  { id: "escudo_pequeno", nome: "Escudo Pequeno", cat: "escudos", dano: "+1 dado bloqueio / Parry", efeito: "Escudo leve • Durabilidade: 50", maxBasico: 1, espacoBonus: 0, peso: 2, preco: 200 },
  { id: "escudo_medio", nome: "Escudo Médio", cat: "escudos", dano: "+2 dados bloqueio / d4 ataque", efeito: "Escudo médio • Durabilidade: 100", maxBasico: 1, espacoBonus: 0, peso: 5, preco: 1000 },
  { id: "escudo_grande", nome: "Escudo Grande", cat: "escudos", dano: "+3 dados bloqueio / Cobertura tiros", efeito: "Escudo grande • Durabilidade: 200", maxBasico: 1, espacoBonus: 0, peso: 10, preco: 4000 },
  { id: "escudo_colossal", nome: "Escudo Colossal (Req. Força 10)", cat: "escudos", dano: "+4 dados bloqueio / Cobertura total", efeito: "Escudo colossal • Durabilidade: 300", maxBasico: 1, espacoBonus: 0, peso: 20, preco: 12000 },
  { id: "granada_frag", nome: "Granada de Fragmentação", cat: "tatico", dano: "3d6", efeito: "Explosão de estilhaços (Máx. básico: 2)", maxBasico: 2, espacoBonus: 0, peso: 0.5, preco: 200 },
  { id: "granada_luz", nome: "Granada de Luz", cat: "tatico", dano: "Desorienta", efeito: "Desorienta todos pegos no campo de visão (Máx. básico: 2)", maxBasico: 2, espacoBonus: 0, peso: 0.5, preco: 200 },
  { id: "molotov", nome: "Coquetel Molotov", cat: "tatico", dano: "2d4 em área", efeito: "Chamas em raio de 3m (Máx. básico: 2)", maxBasico: 2, espacoBonus: 0, peso: 1, preco: 200 },
  { id: "granada_fumaca", nome: "Granada de Fumaça", cat: "tatico", dano: "Ocultação", efeito: "Oculta presença em área circular de raio 5m (Máx. básico: 2)", maxBasico: 2, espacoBonus: 0, peso: 0.5, preco: 200 },
  { id: "mochila", nome: "Mochila", cat: "armazenamento", dano: "+25 pts espaço", efeito: "15 pts de espaço + 2 bolsos laterais de 5 pts (metade do peso p/ itens guardados; 2 rodadas p/ sacar)", maxBasico: null, espacoBonus: 25, peso: 2, preco: 300 },
  { id: "mochila_expedicao", nome: "Mochila de Expedição", cat: "armazenamento", dano: "+30 pts espaço", efeito: "20 pts de espaço + 2 bolsos laterais de 5 pts (Equipamento especial)", maxBasico: null, espacoBonus: 30, peso: 3, preco: 500 },
  { id: "bolsa_pasta", nome: "Bolsa (Pasta)", cat: "armazenamento", dano: "+10 pts espaço", efeito: "Aumenta capacidade em 10 pts de espaço (1 rodada p/ sacar)", maxBasico: null, espacoBonus: 10, peso: 1, preco: 200 },
  { id: "bolsa_tatica_mod", nome: "Bolsa Tática Modular", cat: "armazenamento", dano: "+10 pts espaço", efeito: "10 pts de espaço; pode ser acoplada a outras bolsas", maxBasico: null, espacoBonus: 10, peso: 1, preco: 200 },
  { id: "pochete", nome: "Pochete ou equivalente", cat: "armazenamento", dano: "+5 pts espaço", efeito: "5 pts de espaço (1 rodada p/ sacar)", maxBasico: null, espacoBonus: 5, peso: 0.5, preco: 100 },
  { id: "cinto_bolsas", nome: "Cinto com Bolsas Táticas", cat: "armazenamento", dano: "+24 pts espaço", efeito: "6 bolsos de 4 pts cada; em combate não gasta ação para pegar", maxBasico: null, espacoBonus: 24, peso: 1, preco: 300 },
  { id: "carregador_rapido", nome: "Carregador Rápido", cat: "utilitario", dano: "Recarga rápida", efeito: "Recarrega carga máxima em 1 única recarga (Escopeta, Revólver, Magnum)", maxBasico: null, espacoBonus: 0, peso: 1, preco: 200 },
  { id: "organizador", nome: "Organizador", cat: "utilitario", dano: "-2 rodadas saque", efeito: "Ocupa 5 pts de espaço, mas reduz o tempo para pegar item em combate em 2 rodadas", maxBasico: null, espacoBonus: -5, peso: 0.5, preco: 50 },
  { id: "coldre_bainha", nome: "Coldre / Bainha Extra", cat: "utilitario", dano: "Suporte extra", efeito: "Suporte extra sem arma para equipar armas adicionais", maxBasico: null, espacoBonus: 0, peso: 0.3, preco: 50 },
  { id: "coldres_cruzados", nome: "Coldres Cruzados", cat: "utilitario", dano: "Saque rápido (2 leves)", efeito: "Suporte para 2 armas leves; permite saque rápido sem gasto de ação extra", maxBasico: null, espacoBonus: 0, peso: 1, preco: 750 }
];

// ================= TODAS AS 13 CLASSES DO LIVRO DO JOGADOR =================
const ARVORES_CLASSES = {
  atirador: {
    nome: "Atirador", prof: "Armas de fogo (+5 dano)", pericia: "Pontaria", periciasFoco: ["Pontaria", "Destreza", "Percepção"],
    pesosHex: { Caos: 3, Aura: 3, Espírito: 2, Mente: 1, Vontade: 0 },
    focoCombate: "dano à distância, precisão e carga de munição",
    passivaBase: "Munição pesa metade do peso normal e crítico reduzido para 19.",
    passivaCompleta: "Árvore completa (2º Desp.: crítico 18; 4º Desp.: crítico 17 e recarga -2 rodadas).",
    secundarias: {
      sniper: { nome: "Sniper", prof: "Armas de Fogo Pesadas (+4 dano)", pericia: "Pontaria", terciarias: { franco_atirador: { nome: "Franco Atirador", prof: "Pesadas de Longo alcance (+3 dano)" }, olho_de_aguia: { nome: "Olho de Águia", prof: "Pesadas de médio e curto alcance (+3 dano)" } } },
      gatling: { nome: "Gatling", prof: "Armas de Fogo Médias e Leves (+4 dano)", pericia: "Pontaria", terciarias: { artilheiro: { nome: "Artilheiro", prof: "Longo Alcance (+3 dano)" }, pistoleiro: { nome: "Pistoleiro", prof: "Médio e Curto Alcance (+3 dano)" } } }
    }
  },
  espadachim: {
    nome: "Espadachim", prof: "Armas brancas de corte (+5 dano)", pericia: "Luta", periciasFoco: ["Luta", "Destreza", "Agilidade"],
    pesosHex: { Caos: 3, Mente: 3, Aura: 2, Espírito: 1, Vontade: 0 },
    focoCombate: "dano corpo a corpo de corte e controle de troca",
    passivaBase: "Espadas pesadas têm +50 de durabilidade.",
    passivaCompleta: "Árvore completa (2º Desp.: +75 durabilidade e crítico 19; 4º Desp.: +100 durabilidade e crítico 18).",
    secundarias: {
      guerreiro: { nome: "Guerreiro", prof: "Corte Pesado (+4 dano)", pericia: "Força", terciarias: { paladino: { nome: "Paladino", prof: "Colossal/Foice/Picareta (+3 dano)" }, sanguinario: { nome: "Sanguinário", prof: "Longa/Machado Grande/Serra (+3 dano)" } } },
      cavaleiro: { nome: "Cavaleiro", prof: "Corte Média (+4 dano)", pericia: "Agilidade", terciarias: { guardiao: { nome: "Guardião", prof: "Cimitarra/Média/Lança/Machado (+3 dano)" }, chevalier: { nome: "Chevalier", prof: "Alabarda/Bisarma/Tridente/Pistola (+3 dano)" } } }
    }
  },
  samurai: {
    nome: "Samurai", prof: "Armas brancas de corte (+5 dano)", pericia: "Agilidade", periciasFoco: ["Agilidade", "Luta", "Destreza"],
    pesosHex: { Caos: 3, Aura: 3, Espírito: 2, Mente: 1, Vontade: 0 },
    focoCombate: "estocadas velozes, dano de corte e mobilidade",
    passivaBase: "Pode usar Agilidade no lugar de Luta e Destreza ao estocar com armas de corte.",
    passivaCompleta: "Árvore completa (2º Desp.: +1 Caos além do limite; 4º Desp.: +1 Caos e +2 Agilidade).",
    secundarias: {
      shogun: { nome: "Shogun", prof: "Corte Leves (+4 dano)", pericia: "Força", terciarias: { comandante: { nome: "Comandante", prof: "Adaga/Curta/Rapieira/Corte à Distância (+3 dano)" }, senhor_laminas: { nome: "Senhor das Lâminas", prof: "Alabarda/Kusarigama/Lâmina Dupla (+3 dano)" } } },
      ronin: { nome: "Ronin", prof: "Corte Médias (+4 dano)", pericia: "Agilidade", terciarias: { andarilho: { nome: "Andarilho", prof: "Katana/Wakizashi/Kusarigama (+3 dano)" }, mercionario_s: { nome: "Mercenário", prof: "Bisarma/Espada Média/Fogo Leves (+3 dano)" } } }
    }
  },
  assassino: {
    nome: "Assassino", prof: "Armas leves e furtivas (+5 dano)", pericia: "Furtividade", periciasFoco: ["Furtividade", "Destreza", "Agilidade"],
    pesosHex: { Aura: 3, Caos: 3, Mente: 2, Espírito: 1, Vontade: 0 },
    focoCombate: "letalidade furtiva, dano explosivo em alvos desprevenidos e ocultação",
    passivaBase: "Ataques furtivos e contra alvos desprevenidos ganham bônus de precisão e letalidade.",
    passivaCompleta: "Árvore completa (2º Desp.: crítico aprimorado em furtividade; 4º Desp.: execução letal).",
    secundarias: {
      espectro: { nome: "Espectro", prof: "Corte Leve e Arremesso (+4 dano)", pericia: "Furtividade", terciarias: { sombra_laminada: { nome: "Sombra Laminada", prof: "Adaga/Faca/Wakizashi/Arremesso (+3 dano)" }, ceifador_silencioso: { nome: "Ceifador Silencioso", prof: "Zarabatana/Kukri/Sai (+3 dano)" } } },
      executor_sombras: { nome: "Executor", prof: "Fogo Leve e Precisão (+4 dano)", pericia: "Destreza", terciarias: { franco_oculto: { nome: "Franco Oculto", prof: "Pistola/Revólver/Precisão (+3 dano)" }, mestre_veneno: { nome: "Mestre do Veneno", prof: "Zarabatana/Adaga/Lâmina Dupla (+3 dano)" } } }
    }
  },
  ladrao: {
    nome: "Ladrão", prof: "Armas leves e à distância leve (+5 dano)", pericia: "Destreza", periciasFoco: ["Destreza", "Agilidade", "Enganação"],
    pesosHex: { Caos: 3, Mente: 3, Aura: 2, Espírito: 1, Vontade: 0 },
    focoCombate: "mobilidade, truques/enganos e golpes leves ágeis",
    passivaBase: "Alta mobilidade, destreza manual e vantagem em manobras rápidas e fugas.",
    passivaCompleta: "Árvore completa (2º Desp.: esquiva ágil; 4º Desp.: maestria em truques e saques).",
    secundarias: {
      gatuno: { nome: "Gatuno", prof: "Leves de Corte e Impacto (+4 dano)", pericia: "Agilidade", terciarias: { acrobata: { nome: "Acrobata", prof: "Adaga/Chakram/Nunchaku (+3 dano)" }, infiltrador: { nome: "Infiltrador", prof: "Pistola/Faca/Leque de Ferro (+3 dano)" } } },
      trapaceiro: { nome: "Trapaceiro", prof: "Distância de Corte e Leves (+4 dano)", pericia: "Enganação", terciarias: { batedor: { nome: "Batedor", prof: "Zarabatana/Arremesso/Rapieira (+3 dano)" }, duelista_urbano: { nome: "Duelista Urbano", prof: "Revólver/Cassetete/Soco Inglês (+3 dano)" } } }
    }
  },
  barbaro: {
    nome: "Bárbaro", prof: "Armas brancas (+5 dano)", pericia: "Intimidação", periciasFoco: ["Intimidação", "Força", "Fortitude"],
    pesosHex: { Caos: 3, Aura: 3, Espírito: 2, Vontade: 1, Mente: 0 },
    focoCombate: "dano pesado bruto, vitalidade alta e desempate em combates",
    passivaBase: "Vence em empates de dados, mesmo na defesa.",
    passivaCompleta: "Árvore completa (2º Desp.: vantagem em Evasão; 4º Desp.: vantagem dupla em Evasão).",
    secundarias: {
      tribal: { nome: "Tribal", prof: "Impacto (+4 dano)", pericia: "Fortitude", terciarias: { bestial: { nome: "Bestial", prof: "Longa sem Fio/Martelo/Maça (+3 dano)" }, tempestuoso: { nome: "Tempestuoso", prof: "Cassetete/Clava/Marreta/Tonfa (+3 dano)" } } },
      viking: { nome: "Viking", prof: "Corte (+4 dano)", pericia: "Força", terciarias: { berserker: { nome: "Berserker", prof: "Machado Grande/Colossal/Serra (+3 dano)" }, runico: { nome: "Rúnico", prof: "Espada Média/Foice Grande/Tridente (+3 dano)" } } }
    }
  },
  lutador: {
    nome: "Lutador", prof: "Armas brancas de impacto (+5 dano)", pericia: "Força", periciasFoco: ["Força", "Fortitude", "Luta"],
    pesosHex: { Aura: 3, Caos: 3, Espírito: 2, Vontade: 1, Mente: 0 },
    focoCombate: "dano somado de Força, impacto contínuo e resistência física",
    passivaBase: "Soma a Força no dano.",
    passivaCompleta: "Árvore completa (2º Desp.: soma Força e Caos; 4º Desp.: soma Força, Caos e Âmago).",
    secundarias: {
      gladiador: { nome: "Gladiador", prof: "Impacto médio (+4 dano)", pericia: "Fortitude", terciarias: { campeao: { nome: "Campeão", prof: "Cassetete/Clava/Machado (+3 dano)" }, duelista: { nome: "Duelista", prof: "Espada média/Marreta/Tonfa (+3 dano)" } } },
      pugilista: { nome: "Pugilista", prof: "Impacto Leve (+4 dano)", pericia: "Luta", terciarias: { pancadeiro: { nome: "Pancadeiro", prof: "Caestus/Chicote/Corrente/Martelo (+3 dano)" }, artista_marcial: { nome: "Artista Marcial", prof: "Cajado Bô/Nunchaku/Soco Inglês (+3 dano)" } } }
    }
  },
  monge: {
    nome: "Monge", prof: "Armas brancas de impacto e fluxo (+5 dano)", pericia: "Foco", periciasFoco: ["Foco", "Essência", "Fortitude"],
    pesosHex: { Espírito: 3, Vontade: 3, Aura: 2, Caos: 1, Mente: 0 },
    focoCombate: "controle de fluxo/E.E., disciplina e impacto cadenciado",
    passivaBase: "Disciplina marcial em impacto, armas de alcance/cajado e controle do fluxo.",
    passivaCompleta: "Árvore completa (2º Desp.: +1 dado em bloqueio/Parry; 4º Desp.: fluxo marcial aprimorado).",
    secundarias: {
      mestre_fluxo: { nome: "Mestre do Fluxo", prof: "Impacto Leve e Cajados (+4 dano)", pericia: "Essência", terciarias: { vento_sereno: { nome: "Vento Sereno", prof: "Cajado Bô/Nunchaku/Bastão (+3 dano)" }, punho_sagrado: { nome: "Punho Sagrado", prof: "Caestus/Soco Inglês/Tonfa (+3 dano)" } } },
      guardiao_templo: { nome: "Guardião do Templo", prof: "Alcance e Impacto (+4 dano)", pericia: "Fortitude", terciarias: { muralha_serena: { nome: "Muralha Serena", prof: "Cajado Bô/Lança/Martelo (+3 dano)" } } }
    }
  },
  mago: {
    nome: "Mago", prof: "Fluxos, arcanismo e armas leves/haste (+5 dano)", pericia: "Arcanum", periciasFoco: ["Arcanum", "Essência", "Foco"],
    pesosHex: { Espírito: 3, Vontade: 3, Mente: 3, Aura: 0, Caos: 0 },
    focoCombate: "poder de E.E./fluxos, sanidade e manipulação arcana",
    passivaBase: "Domínio de arcanismo, fluxo de E.E. e armas leves/alcance usadas como foco marcial.",
    passivaCompleta: "Árvore completa (2º Desp.: canalização ampliada; 4º Desp.: maestria arcana).",
    secundarias: {
      arcanista: { nome: "Arcanista", prof: "Foco Arcano e Alcance (+4 dano)", pericia: "Arcanum", terciarias: { cronomante: { nome: "Cronomante", prof: "Cajado Bô/Adaga/Leque de Ferro (+3 dano)" }, elementalista: { nome: "Elementalista", prof: "Cajado Bô/Lança/Pistola (+3 dano)" } } },
      ocultista: { nome: "Ocultista", prof: "Rituais e Armas Leves (+4 dano)", pericia: "Essência", terciarias: { ritualista: { nome: "Ritualista", prof: "Foice/Adaga/Zarabatana (+3 dano)" }, mago_guerra: { nome: "Mago de Guerra", prof: "Espada Curta/Cajado Bô/Revólver (+3 dano)" } } }
    }
  },
  artifice: {
    nome: "Artífice", prof: "Armas de fogo, mecânicas e impacto (+5 dano)", pericia: "Tecnologia", periciasFoco: ["Tecnologia", "Ciência", "Pontaria"],
    pesosHex: { Mente: 3, Aura: 3, Espírito: 2, Caos: 1, Vontade: 0 },
    focoCombate: "engenharia tática, carga de equipamentos/munições e utilidade",
    passivaBase: "Engenharia de campo, manutenção/modificação de armas e munições/dispositivos.",
    passivaCompleta: "Árvore completa (2º Desp.: protótipos aprimorados; 4º Desp.: arsenal de engenharia).",
    secundarias: {
      engenheiro: { nome: "Engenheiro", prof: "Fogo e Pesadas/Médias (+4 dano)", pericia: "Tecnologia", terciarias: { balistico: { nome: "Balístico", prof: "Rifle de Caça/Escopeta/Magnum (+3 dano)" }, demolidor: { nome: "Demolidor", prof: "Lança-chamas/Marreta/RPG-7 (+3 dano)" } } },
      inventor: { nome: "Inventor", prof: "Impacto e Distância (+4 dano)", pericia: "Ciência", terciarias: { automatista: { nome: "Automatista", prof: "Martelo/Pistola/Besta (+3 dano)" }, alquimista_tatico: { nome: "Alquimista Tático", prof: "Zarabatana/Arremesso/Cassetete (+3 dano)" } } }
    }
  },
  tanque: {
    nome: "Tanque", prof: "Armas pesadas, impacto e corte de linha de frente (+5 dano)", pericia: "Fortitude", periciasFoco: ["Fortitude", "Força", "Determinação"],
    pesosHex: { Aura: 3, Caos: 3, Espírito: 2, Vontade: 1, Mente: 0 },
    focoCombate: "linha de frente, capacidade de carga, vida e absorção",
    passivaBase: "Alta resistência física, absorção de choque e linha de frente com armas pesadas/alcance.",
    passivaCompleta: "Árvore completa (2º Desp.: muralha de linha de frente; 4º Desp.: bastião inabalável).",
    secundarias: {
      colosso: { nome: "Colosso", prof: "Armas Pesadas e Impacto (+4 dano)", pericia: "Fortitude", terciarias: { baluarte: { nome: "Baluarte", prof: "Martelo de Guerra/Maça/Espada Longa (+3 dano)" }, esmagador: { nome: "Esmagador", prof: "Marreta/Clava/Machado Grande (+3 dano)" } } },
      sentinela: { nome: "Sentinela", prof: "Alcance e Controle de Área (+4 dano)", pericia: "Determinação", terciarias: { guardiao_linha: { nome: "Guardião da Linha", prof: "Alabarda/Lança/Tridente (+3 dano)" }, pacificador: { nome: "Pacificador", prof: "Escopeta/Cassetete/Espada Média (+3 dano)" } } }
    }
  },
  cacador: {
    nome: "Caçador", prof: "Armas de Ataque à distância (+5 dano)", pericia: "Intuição", periciasFoco: ["Intuição", "Percepção", "Pontaria"],
    pesosHex: { Aura: 3, Espírito: 3, Caos: 2, Mente: 1, Vontade: 0 },
    focoCombate: "rastreio, precisão à distância, percepção/intuição e carga",
    passivaBase: "Vantagem para localizar inimigos ocultos e contra ataques furtivos.",
    passivaCompleta: "Árvore completa (2º Desp.: vantagem dupla contra furtivos; 4º Desp.: vantagem tripla).",
    secundarias: {
      rastreador: { nome: "Rastreador", prof: "Corte à Distância (+4 dano)", pericia: "Percepção", terciarias: { espreitador: { nome: "Espreitador", prof: "Arco e Besta (+3 dano)" }, oculto: { nome: "Oculto", prof: "Zarabatana e Arremesso (+3 dano)" } } },
      predador: { nome: "Predador", prof: "Fogo (+4 dano)", pericia: "Pontaria", terciarias: { feral: { nome: "Feral", prof: "Batalha/Escopeta/Precisão (+3 dano)" }, assaltante: { nome: "Assaltante", prof: "Assalto/SMG/Caça/Revólver (+3 dano)" } } }
    }
  },
  investigador: {
    nome: "Investigador", prof: "Armas de Fogo (+5 dano)", pericia: "Investigação", periciasFoco: ["Investigação", "Percepção", "Pontaria"],
    pesosHex: { Mente: 3, Espírito: 3, Vontade: 2, Aura: 1, Caos: 0 },
    focoCombate: "leitura de cena/pistas, precisão e resistência mental",
    passivaBase: "Recebe pistas adicionais ao investigar cenas.",
    passivaCompleta: "Árvore completa (2º Desp.: vantagem em interrogatórios; 4º Desp.: vantagem dupla).",
    secundarias: {
      perceptivo: { nome: "Perceptivo", prof: "Fogo Leve (+4 dano)", pericia: "Percepção", terciarias: { estudioso: { nome: "Estudioso", prof: "Fogo Leve (+3 dano)" }, sabio_i: { nome: "Sábio", prof: "Rituais Elementais (+3 dano)" } } },
      analitico: { nome: "Analítico", prof: "Ponto Fraco (+4 dano)", pericia: "Investigação", terciarias: { revoltado: { nome: "Revoltado", prof: "Fogo Média (+3 dano)" } } }
    }
  }
};

// ================= RECOMENDAÇÕES DE ARMAS (USADAS NA ABA EQUIPAMENTOS) =================
const RECOMENDACOES_POR_CLASSE = {
  atirador: ["pistola", "revolver", "magnum", "rifle_assalto", "smgs", "escopeta_tatica", "rifle_precisao"],
  espadachim: ["espada_curta", "espada_media", "espada_longa", "espada_colossal", "cimitarra", "rapieira", "alabarda"],
  samurai: ["katana", "wakizashi", "espada_longa", "kusarigama", "lamina_dupla", "leque_ferro", "arco"],
  assassino: ["adaga", "faca", "wakizashi", "kukri", "sai", "zarabatana", "armas_arremesso", "pistola"],
  ladrao: ["adaga", "faca", "rapieira", "chakram", "zarabatana", "armas_arremesso", "pistola", "soco_ingles"],
  barbaro: ["machado_grande", "machado_normal", "espada_colossal", "serra_eletrica", "marreta", "clava", "maca"],
  lutador: ["soco_ingles", "caestus", "bastao", "martelo", "marreta", "martelo_guerra", "nunchaku", "tonfa"],
  monge: ["cajado_bo", "bastao", "nunchaku", "caestus", "soco_ingles", "tonfa", "lanca"],
  mago: ["cajado_bo", "adaga", "leque_ferro", "foice", "lanca", "pistola", "zarabatana"],
  artifice: ["pistola", "revolver", "escopeta_serrada", "rifle_caca", "besta", "martelo", "marreta", "lanca_chamas"],
  tanque: ["martelo_guerra", "maca", "marreta", "espada_longa", "alabarda", "lanca", "tridente", "escopeta"],
  cacador: ["arco", "besta", "zarabatana", "armas_arremesso", "rifle_caca", "rifle_precisao", "revolver"],
  investigador: ["pistola", "revolver", "rifle_caca", "smgs", "bastao", "faca", "escopeta_serrada"]
};

function unirRecomendacoesClasses(...chavesClasses) {
  const resultado = [];
  chavesClasses.forEach((chave) => {
    const lista = RECOMENDACOES_POR_CLASSE[chave] || [];
    lista.forEach((armaId) => {
      if (!resultado.includes(armaId)) {
        resultado.push(armaId);
      }
    });
  });
  return resultado;
}

const COMBINACOES_13_CLASSES = (() => {
  const todasChaves = Object.keys(ARVORES_CLASSES);
  const mapa = {};
  todasChaves.forEach((cA) => {
    mapa[cA] = {};
    todasChaves.forEach((cB) => {
      mapa[cA][cB] = cA === cB
        ? [...(RECOMENDACOES_POR_CLASSE[cA] || [])]
        : unirRecomendacoesClasses(cA, cB);
    });
  });
  return mapa;
})();

const DESPERTADO = {
  atributos: [
    { nome: "Âmago", idSlot: "hex-Amago", travado: true, inicial: 0, cor: "#d4a84f" },
    { nome: "Caos", idSlot: "hex-Caos", travado: false, inicial: 0, cor: "#c77dff" },
    { nome: "Aura", idSlot: "hex-Aura", travado: false, inicial: 0, cor: "#52d1a2" },
    { nome: "Espírito", idSlot: "hex-Espirito", travado: false, inicial: 0, cor: "#f4d06f" },
    { nome: "Vontade", idSlot: "hex-Vontade", travado: false, inicial: 0, cor: "#ff6b86" },
    { nome: "Mente", idSlot: "hex-Mente", travado: false, inicial: 0, cor: "#7ab8ff" }
  ],
  recursos: (atr) => ({
    vida: (atr["Caos"] || 0) * 10 + 10,
    sanidade: (atr["Mente"] || 0) * 9 + 6,
    ee: (atr["Espírito"] || 0) * 3 + (atr["Aura"] || 0),
    capacidadeCarga: PESO_BASE_CARGA + (atr["Aura"] || 0) * 2 + (atr["Caos"] || 0)
  }),
  pericias: {
    "Agilidade": ["Caos", "Âmago"],
    "Arcanum": ["Espírito", "Vontade", "Âmago"],
    "Atualidades": ["Âmago", "Aura", "Espírito", "Mente", "Vontade"],
    "Ciência": ["Aura", "Caos", "Mente", "Âmago"],
    "Conhecimentos": ["Mente", "Âmago"],
    "Destreza": ["Caos", "Mente", "Âmago"],
    "Determinação": ["Âmago", "Aura", "Vontade", "Espírito"],
    "Diplomacia": ["Mente", "Espírito", "Caos", "Aura", "Âmago"],
    "Enganação": ["Âmago", "Aura", "Caos", "Mente"],
    "Essência": ["Espírito", "Âmago"],
    "Foco": ["Vontade", "Âmago"],
    "Força": ["Aura", "Caos"],
    "Fortitude": ["Aura", "Espírito"],
    "Furtividade": ["Aura", "Âmago"],
    "Intimidação": ["Caos", "Mente", "Vontade", "Âmago"],
    "Intuição": ["Aura", "Espírito", "Âmago"],
    "Investigação": ["Espírito", "Mente", "Vontade", "Âmago"],
    "Luta": ["Caos", "Mente"],
    "Medicina": ["Mente", "Vontade", "Âmago"],
    "Percepção": ["Mente", "Vontade"],
    "Persuasão": ["Aura", "Caos", "Espírito", "Vontade", "Âmago"],
    "Pilotagem": ["Caos", "Espírito", "Mente", "Vontade", "Âmago"],
    "Pontaria": ["Aura", "Caos", "Âmago"],
    "Sorte": ["Espírito", "Vontade"],
    "Tecnologia": ["Aura", "Caos", "Mente", "Vontade", "Âmago"]
  }
};

// Estado Livro
let capituloAtual = SUMARIO_OFICIAL[0];
let pdfPaginaAtual = capituloAtual.pdfInicio;
let modoLivroAtual = "leitura";
let topicoAtivoNome = capituloAtual.subtopicos[0]?.nome || "";

// Estado Ficha
let etapaAtual = 1;
let maiorEtapaLiberada = 1;
let modoArmasAtual = "recomendadas";
let dropdownCategoriasAberto = false;
let filtroTipoArmaAtual = "todas";
let filtroTipoDefesaAtual = "cortante";
let filtroTipoEquipAtual = "tatico";
let sobrecarregadoAtual = false;

const valoresAtributos = {};
const qtdArmas = {};
const qtdMunicoes = {};
const qtdMunicoesEspeciais = {};
const defesaSelecionada = new Set();
const qtdEquipamentos = {};

// Elementos Livro
const tituloCapituloEl = document.getElementById("tituloCapitulo");
const badgeCapituloEl = document.getElementById("badgeCapitulo");
const indicadorPaginaCapEl = document.getElementById("indicadorPaginaCap");
const subtopicosCapituloEl = document.getElementById("subtopicosCapitulo");
const conteudoLivroEl = document.getElementById("conteudoLivroRenderizado");
const buscaLivroEl = document.getElementById("buscaLivro");
const barraTrocaPaginaRodape = document.getElementById("barraTrocaPaginaRodape");
const textoRodapePagina = document.getElementById("textoRodapePagina");
const btnRodapeAnt = document.getElementById("btnRodapeAnt");
const btnRodapeProx = document.getElementById("btnRodapeProx");

// Elementos Ficha
const badgeOrcamentoEl = document.getElementById("badgeOrcamento");
const saldoRestanteEl = document.getElementById("saldoRestante");
const resumoGastoRodapeEl = document.getElementById("resumoGastoRodape");
const nomeExibicaoTopo = document.getElementById("nomeExibicaoTopo");
const subinfoTopoFicha = document.getElementById("subinfoTopoFicha");
const resumoTopoFicha = document.getElementById("resumoTopoFicha");
const inputNome = document.getElementById("inputNomePersonagem");
const selectTipo = document.getElementById("selectTipoPersonagem");
const inputIdade = document.getElementById("inputIdade");
const inputAltura = document.getElementById("inputAltura");
const inputPesoCorporal = document.getElementById("inputPesoCorporal");
const inputAparencia = document.getElementById("inputAparencia");
const inputHistoria = document.getElementById("inputHistoria");
const statusEtapa1 = document.getElementById("statusEtapa1");
const btnAvancarEtapa1 = document.getElementById("btnAvancarEtapa1");
const btnAvancarEtapa2 = document.getElementById("btnAvancarEtapa2");
const btnAvancarEtapa3 = document.getElementById("btnAvancarEtapa3");
const btnVoltarEquipamentosSobrecarga = document.getElementById("btnVoltarEquipamentosSobrecarga");
const verificadorEtapa3El = document.getElementById("verificadorEtapa3");
const verificadorPesoCargaEl = document.getElementById("verificadorPesoCarga");
const abaSubMunicoesEl = document.getElementById("abaSubMunicoes");
const badgeContMunicaoEl = document.getElementById("badgeContMunicao");

const listaPericias = document.getElementById("listaPericias");
const pontosRestantesEl = document.getElementById("pontosRestantes");
const badgePontosEl = document.getElementById("badgePontos");
const btnResetPontos = document.getElementById("btnResetPontos");
const sel1 = document.getElementById("classe1");
const sel2 = document.getElementById("classe2");
const sel3 = document.getElementById("classe3");
const statusArvoreBadge = document.getElementById("statusArvoreBadge");
const avisoRegraClasse = document.getElementById("avisoRegraClasse");
const resumoClassesAtivas = document.getElementById("resumoClassesAtivas");
const sugestaoClasseArmaEl = document.getElementById("sugestaoClasseArma");

// ================= TOPO CENTRALIZADO (TIPO + CLASSES ATIVAS) =================
function atualizarCabecalhoTopoFicha() {
  if (!subinfoTopoFicha || !resumoTopoFicha) return;
  resumoTopoFicha.textContent = selectTipo.value || "Despertado";

  const labelsClasse = [];
  const raizKey = sel1.value;
  if (raizKey && raizKey !== "nenhuma" && ARVORES_CLASSES[raizKey]) {
    labelsClasse.push(ARVORES_CLASSES[raizKey].nome);

    if (sel2.value.startsWith("mudar:")) {
      const c2 = ARVORES_CLASSES[sel2.value.split(":")[1]];
      if (c2) labelsClasse.push(c2.nome);
    } else if (sel2.value.startsWith("ramo:")) {
      const r2 = ARVORES_CLASSES[raizKey].secundarias[sel2.value.split(":")[1]];
      if (r2) labelsClasse.push(r2.nome);
    }

    if (sel3.value.startsWith("terc:") && sel2.value.startsWith("ramo:")) {
      const r2 = ARVORES_CLASSES[raizKey].secundarias[sel2.value.split(":")[1]];
      const t3 = r2?.terciarias?.[sel3.value.split(":")[1]];
      if (t3) labelsClasse.push(t3.nome);
    } else if (sel3.value.startsWith("sec_outra:") && sel2.value.startsWith("mudar:")) {
      const c2 = ARVORES_CLASSES[sel2.value.split(":")[1]];
      const secOutra = c2?.secundarias?.[sel3.value.split(":")[1]];
      if (secOutra) labelsClasse.push(secOutra.nome);
    }
  }

  subinfoTopoFicha.innerHTML = `<span id="resumoTopoFicha" class="tag-tipo">${selectTipo.value || "Despertado"}</span>`;
  if (labelsClasse.length) {
    const tagClasse = document.createElement("span");
    tagClasse.className = "tag-tipo";
    tagClasse.textContent = labelsClasse.join(" • ");
    subinfoTopoFicha.appendChild(tagClasse);
  }
}

// ================= LIVRO =================
function totalPaginasPdf() {
  return typeof LIVRO_DO_JOGADOR_PAGINAS !== "undefined" && LIVRO_DO_JOGADOR_PAGINAS.length
    ? LIVRO_DO_JOGADOR_PAGINAS.length
    : 272;
}

function getTextoPdf(pdfPag) {
  if (typeof LIVRO_DO_JOGADOR_PAGINAS === "undefined" || !LIVRO_DO_JOGADOR_PAGINAS.length) {
    return "Arquivo livro_dados.js não encontrado na pasta.";
  }
  const idx = Math.max(0, Math.min(LIVRO_DO_JOGADOR_PAGINAS.length - 1, pdfPag - 1));
  return LIVRO_DO_JOGADOR_PAGINAS[idx].texto || "(Página sem texto extraível)";
}

function formatarTextoRicoDoPdf(textoBruto) {
  const linhasBrutas = textoBruto.split(/\r?\n/);
  const linhasMescladas = [];

  for (const raw of linhasBrutas) {
    const l = raw.replace(/\s+/g, " ").trim();
    if (!l) { linhasMescladas.push(""); continue; }
    const prev = linhasMescladas[linhasMescladas.length - 1];
    const continua =
      prev &&
      !prev.endsWith(".") &&
      !prev.endsWith(":") &&
      !prev.endsWith("!") &&
      !prev.endsWith("?") &&
      !/^[A-ZÁÉÍÓÚÂÊÔÃÕÇ][a-záéíóúâêôãõç0-9\s/()-]{1,34}$/.test(l);
    if (continua) linhasMescladas[linhasMescladas.length - 1] = `${prev} ${l}`;
    else linhasMescladas.push(l);
  }

  let html = "";
  let emLista = false;

  for (const l of linhasMescladas) {
    if (!l) {
      if (emLista) { html += "</ul>"; emLista = false; }
      continue;
    }

    const ehTopico = /^[-•*]\s+/.test(l);
    if (ehTopico) {
      if (!emLista) { html += "<ul>"; emLista = true; }
      html += `<li>${l.replace(/^[-•*]\s+/, "")}</li>`;
      continue;
    }

    if (emLista) { html += "</ul>"; emLista = false; }

    const ehTitulo =
      l.length <= 36 &&
      !/[.!?;]$/.test(l) &&
      !/\b(é|são|para|com|que|quando|onde|em|de|do|da|dos|das|um|uma|ao|aos)\b/i.test(l);
    html += ehTitulo ? `<h4>${l}</h4>` : `<p>${l}</p>`;
  }

  if (emLista) html += "</ul>";
  return html || "<p>Sem conteúdo legível nesta página.</p>";
}

function irParaPaginaDoLivro(pdfPag, nomeTopico = "") {
  pdfPaginaAtual = Math.max(1, Math.min(totalPaginasPdf(), Number(pdfPag) || 1));
  const cap = SUMARIO_OFICIAL.find((c) => pdfPaginaAtual >= c.pdfInicio && pdfPaginaAtual <= c.pdfFim);
  if (cap) capituloAtual = cap;
  topicoAtivoNome = nomeTopico || capituloAtual.subtopicos.find((s) => s.pdfPag === pdfPaginaAtual)?.nome || "";
  modoLivroAtual = "leitura";
  buscaLivroEl.value = "";
  atualizarChipsModo();
  renderizarConteudoLivro();
}

function atualizarChipsModo() {
  document.querySelectorAll(".chip-ferramenta").forEach((c) => {
    c.classList.toggle("ativa", c.dataset.modo === modoLivroAtual);
  });
}

function atualizarControlesPagina() {
  const total = totalPaginasPdf();
  const mostra = modoLivroAtual === "leitura" && !buscaLivroEl.value.trim();
  barraTrocaPaginaRodape.classList.toggle("oculto", !mostra);
  if (!mostra) return;
  btnRodapeAnt.disabled = pdfPaginaAtual <= 1;
  btnRodapeProx.disabled = pdfPaginaAtual >= total;
  const capOffset = pdfPaginaAtual - capituloAtual.pdfInicio + 1;
  const capTotal = Math.max(1, capituloAtual.pdfFim - capituloAtual.pdfInicio + 1);
  indicadorPaginaCapEl.textContent = `Pág. ${pdfPaginaAtual}/${total}`;
  textoRodapePagina.textContent = `Pág. ${Math.max(1, capOffset)}/${capTotal}`;
}

function renderizarConteudoLivro() {
  if (modoLivroAtual === "sumario") {
    badgeCapituloEl.textContent = "Sumário";
    tituloCapituloEl.textContent = "Sumário Reativo";
    indicadorPaginaCapEl.textContent = `${SUMARIO_OFICIAL.length} seções`;
    subtopicosCapituloEl.innerHTML = "";
    conteudoLivroEl.innerHTML = SUMARIO_OFICIAL.map((cap) => `
      <div class="item-sumario-card" data-abrir-pag="${cap.pdfInicio}">
        <strong>${cap.titulo}</strong>
        <span>${cap.paginasLabel} • ${cap.subtopicos.map((s) => s.nome).join(" • ")}</span>
      </div>
    `).join("");
    conteudoLivroEl.querySelectorAll("[data-abrir-pag]").forEach((el) => {
      el.addEventListener("click", () => irParaPaginaDoLivro(el.dataset.abrirPag));
    });
    conteudoLivroEl.scrollTop = 0;
    atualizarControlesPagina();
    return;
  }

  badgeCapituloEl.textContent = capituloAtual.paginasLabel;
  tituloCapituloEl.textContent = topicoAtivoNome || capituloAtual.titulo;

  subtopicosCapituloEl.innerHTML = capituloAtual.subtopicos
    .map((sub) => {
      const ativo = topicoAtivoNome ? sub.nome === topicoAtivoNome : sub.pdfPag === pdfPaginaAtual;
      return `<button type="button" class="btn-subtopico ${ativo ? "ativo" : ""}" data-pdf-pag="${sub.pdfPag}" data-sub-nome="${sub.nome}">${sub.nome}</button>`;
    })
    .join("");

  subtopicosCapituloEl.querySelectorAll(".btn-subtopico").forEach((pill) => {
    pill.addEventListener("click", () => {
      pdfPaginaAtual = Number(pill.dataset.pdfPag);
      topicoAtivoNome = pill.dataset.subNome || "";
      renderizarConteudoLivro();
    });
  });

  conteudoLivroEl.innerHTML = formatarTextoRicoDoPdf(getTextoPdf(pdfPaginaAtual));
  conteudoLivroEl.scrollTop = 0;
  atualizarControlesPagina();
}

function mudarPaginaPdf(delta) {
  const proxima = Math.max(1, Math.min(totalPaginasPdf(), pdfPaginaAtual + delta));
  if (proxima === pdfPaginaAtual) return;
  pdfPaginaAtual = proxima;
  const cap = SUMARIO_OFICIAL.find((c) => pdfPaginaAtual >= c.pdfInicio && pdfPaginaAtual <= c.pdfFim);
  if (cap) capituloAtual = cap;
  topicoAtivoNome = capituloAtual.subtopicos.find((s) => s.pdfPag === pdfPaginaAtual)?.nome || "";
  renderizarConteudoLivro();
}

buscaLivroEl.addEventListener("input", () => {
  const termo = buscaLivroEl.value.trim().toLowerCase();
  if (!termo) { renderizarConteudoLivro(); return; }
  if (typeof LIVRO_DO_JOGADOR_PAGINAS === "undefined") return;

  const achados = LIVRO_DO_JOGADOR_PAGINAS
    .filter((p) => (p.texto || "").toLowerCase().includes(termo))
    .slice(0, 10);

  badgeCapituloEl.textContent = "Busca";
  tituloCapituloEl.textContent = `"${buscaLivroEl.value}"`;
  indicadorPaginaCapEl.textContent = `${achados.length}`;
  subtopicosCapituloEl.innerHTML = "";
  atualizarControlesPagina();

  conteudoLivroEl.innerHTML = achados.length
    ? achados.map((r) => `
      <div class="item-sumario-card" data-ir-pag="${r.pagina}">
        <strong>Pág. ${r.pagina}</strong>
        <span>${r.texto.replace(/\s+/g, " ").slice(0, 160)}...</span>
      </div>
    `).join("")
    : `<p>Nenhum trecho encontrado.</p>`;

  conteudoLivroEl.querySelectorAll("[data-ir-pag]").forEach((card) => {
    card.addEventListener("click", () => irParaPaginaDoLivro(card.dataset.irPag));
  });
});

btnRodapeAnt.addEventListener("click", () => mudarPaginaPdf(-1));
btnRodapeProx.addEventListener("click", () => mudarPaginaPdf(1));
document.querySelectorAll(".chip-ferramenta").forEach((chip) => {
  chip.addEventListener("click", () => {
    modoLivroAtual = chip.dataset.modo;
    buscaLivroEl.value = "";
    atualizarChipsModo();
    renderizarConteudoLivro();
  });
});

// ================= FICHA EM 4 ETAPAS =================
function ativarSubabaEquipamento(alvo) {
  if (alvo === "municoes" && !getArmasQueExigemMunicao().length) {
    alvo = "armas";
  }
  document.querySelectorAll(".subaba-eq").forEach((b) => {
    b.classList.toggle("ativa", b.dataset.subeq === alvo);
  });
  ["armas", "municoes", "defesa", "itens"].forEach((k) => {
    const el = document.getElementById(`subeq-${k}`);
    if (el) el.classList.toggle("oculto", k !== alvo);
  });
}

function irParaEtapa(num, subabaInicial = null) {
  if (num > maiorEtapaLiberada) return;
  etapaAtual = num;
  document.querySelectorAll(".btn-etapa").forEach((b) => {
    const n = Number(b.dataset.etapa);
    b.classList.toggle("ativa", n === etapaAtual);
    b.classList.toggle("bloqueada", n > maiorEtapaLiberada);
    b.disabled = n > maiorEtapaLiberada;
  });
  [1, 2, 3, 4].forEach((n) => {
    document.getElementById(`etapa${n}`).classList.toggle("oculto", n !== etapaAtual);
  });
  if (num === 2) {
    recalcularFicha();
  }
  if (num === 3) {
    if (subabaInicial) ativarSubabaEquipamento(subabaInicial);
    atualizarCatalogosEquipamento();
  }
}

function atualizarVisualEtapa4PorTipo() {
  const tipo = selectTipo.value || "Despertado";
  const btnTab4 = document.querySelector('.btn-etapa[data-etapa="4"]');
  const titulo4 = document.getElementById("tituloEtapa4");
  const cardInfo4 = document.getElementById("cardInfoEtapa4");
  const camposExtra = document.getElementById("camposEtapa4Extra");
  const label1 = document.getElementById("labelCampo1Etapa4");
  const label2 = document.getElementById("labelCampo2Etapa4");
  const inp1 = document.getElementById("inputGatilhoDespertar");
  const inp2 = document.getElementById("inputDesejoDespertar");

  if (tipo === "Sintético") {
    if (btnTab4) btnTab4.textContent = "4. Envio Mestre";
    titulo4.textContent = "Etapa 4 — Confirmação Final & Envio para o Mestre";
    cardInfo4.innerHTML = `
      <strong>Modo Sintético:</strong>
      <p>Sintéticos não possuem Despertar espiritual. Revise suas escolhas e clique abaixo para gerar a ficha completa e enviá-la ao mestre para injeção no jogo.</p>
    `;
    camposExtra.classList.add("oculto");
  } else if (tipo === "Aberração") {
    if (btnTab4) btnTab4.textContent = "4. Aberração";
    titulo4.textContent = "Etapa 4 — Poderes de Aberração & Envio para o Mestre";
    cardInfo4.innerHTML = `
      <strong>Poderes de Aberração:</strong>
      <p>Descreva a mutação ou poder específico da sua Aberração e como ele funciona. O mestre analisará o conceito para definir o despertar mais adaptado à sua criatura.</p>
    `;
    camposExtra.classList.remove("oculto");
    label1.textContent = "Poder Específico da Aberração";
    inp1.placeholder = "Ex: Braços quitinosos retráteis, secreção ácida, regeneração acelerada...";
    label2.textContent = "Como o Poder Funciona & Observações para o Mestre";
    inp2.placeholder = "Explique como o poder é ativado, limitações e o que o mestre deve adaptar...";
  } else {
    if (btnTab4) btnTab4.textContent = "4. Despertar";
    titulo4.textContent = "Etapa 4 — Despertar, Base & Envio para Injeção";
    cardInfo4.innerHTML = `
      <strong>Como funciona o Despertar (Base):</strong>
      <p>A base do personagem parte da distribuição inicial de pontos e do teto de carga. O Despertar amplia limites e manifestações conforme a progressão do livro e a confirmação do mestre. Ao enviar, o mestre analisa a ficha completa e injeta os valores finais (E.E., dano e status) no jogo.</p>
    `;
    camposExtra.classList.remove("oculto");
    label1.textContent = "Como será o Despertar / Gatilho e Base Pretendida";
    inp1.placeholder = "Descreva o gatilho e a base do Despertar...";
    label2.textContent = "Manifestação Esperada & Observações para o Mestre";
    inp2.placeholder = "Como o poder se manifesta e o que o mestre deve revisar/injetar...";
  }
}

function validarEtapa1() {
  const faltando = [];
  if (!inputNome.value.trim()) faltando.push("Nome");
  if (!selectTipo.value.trim()) faltando.push("Tipo");
  if (!inputIdade.value.trim()) faltando.push("Idade");
  if (!inputAltura.value.trim()) faltando.push("Altura");
  if (!inputPesoCorporal.value.trim()) faltando.push("Peso Corporal");
  if (!inputAparencia.value.trim()) faltando.push("Aparência");
  if (!inputHistoria.value.trim()) faltando.push("História/Roleplay");

  const ok = faltando.length === 0;
  nomeExibicaoTopo.textContent = inputNome.value.trim() || "Novo Personagem";
  atualizarCabecalhoTopoFicha();
  atualizarVisualEtapa4PorTipo();

  if (ok) {
    maiorEtapaLiberada = Math.max(maiorEtapaLiberada, 2);
    statusEtapa1.textContent = "Identidade completa! Etapa 2 (Classes & Hex) liberada.";
    statusEtapa1.classList.add("ok");
    btnAvancarEtapa1.disabled = false;
  } else {
    btnAvancarEtapa1.disabled = true;
    statusEtapa1.textContent = `Falta preencher: ${faltando.join(", ")}.`;
    statusEtapa1.classList.remove("ok");
    if (maiorEtapaLiberada > 1) maiorEtapaLiberada = 1;
  }

  document.querySelectorAll(".btn-etapa").forEach((b) => {
    const n = Number(b.dataset.etapa);
    b.classList.toggle("bloqueada", n > maiorEtapaLiberada);
    b.disabled = n > maiorEtapaLiberada;
  });
}

[inputNome, selectTipo, inputIdade, inputAltura, inputPesoCorporal, inputAparencia, inputHistoria].forEach((el) => {
  el.addEventListener("input", validarEtapa1);
  el.addEventListener("change", validarEtapa1);
});

document.querySelectorAll(".btn-etapa").forEach((btn) => {
  btn.addEventListener("click", () => {
    const etapa = Number(btn.dataset.etapa);
    if (!btn.disabled && etapa <= maiorEtapaLiberada) {
      irParaEtapa(etapa);
    }
  });
});

btnAvancarEtapa1.addEventListener("click", () => irParaEtapa(2));
document.getElementById("btnVoltarEtapa2").addEventListener("click", () => irParaEtapa(1));
btnAvancarEtapa2.addEventListener("click", () => {
  if (!btnAvancarEtapa2.disabled) {
    maiorEtapaLiberada = Math.max(maiorEtapaLiberada, 3);
    irParaEtapa(3);
  }
});
document.getElementById("btnVoltarEtapa3").addEventListener("click", () => irParaEtapa(2));
btnVoltarEquipamentosSobrecarga.addEventListener("click", () => {
  maiorEtapaLiberada = Math.max(maiorEtapaLiberada, 3);
  irParaEtapa(3, "itens");
});
btnAvancarEtapa3.addEventListener("click", () => {
  if (btnAvancarEtapa3.disabled) return;
  maiorEtapaLiberada = Math.max(maiorEtapaLiberada, 4);
  irParaEtapa(4);
});
document.getElementById("btnVoltarEtapa4").addEventListener("click", () => irParaEtapa(3));

document.querySelectorAll(".subaba-eq").forEach((btn) => {
  btn.addEventListener("click", () => ativarSubabaEquipamento(btn.dataset.subeq));
});

// ================= RECOMENDAÇÃO DE ARMAS (EXCLUSIVAMENTE EM EQUIPAMENTOS) =================
function getArmasEscolhidas() {
  return CATALOGO_ARMAS.filter((a) => (qtdArmas[a.id] || 0) > 0);
}

function getArmasQueExigemMunicao() {
  return getArmasEscolhidas().filter((a) => Boolean(a.municaoId));
}

function obterClassesSelecionadasKeys() {
  const keys = [];
  const c1 = sel1.value;
  const v2 = sel2.value;

  if (c1 && c1 !== "nenhuma" && ARVORES_CLASSES[c1]) {
    keys.push(c1);
  }
  if (v2 && v2.startsWith("mudar:")) {
    const outraKey = v2.split(":")[1];
    if (outraKey && ARVORES_CLASSES[outraKey] && !keys.includes(outraKey)) {
      keys.push(outraKey);
    }
  }
  return keys;
}

function obterPerfilRecomendacaoArmas() {
  const classesKeys = obterClassesSelecionadasKeys();
  const nomesClasses = classesKeys.map((k) => ARVORES_CLASSES[k]?.nome).filter(Boolean);

  if (!classesKeys.length) {
    return {
      idsRecomendados: ["pistola", "espada_curta", "bastao", "arco"],
      titulo: "Armas Recomendadas para o Personagem",
      descricao: "Escolha uma classe (ou combinação de classes) na Etapa 2 para ver as armas recomendadas aqui — ou abra Todas as Categorias ▾ para ver todo o catálogo.",
      armas: CATALOGO_ARMAS.filter((a) => ["pistola", "espada_curta", "bastao", "arco"].includes(a.id))
    };
  }

  const cA = classesKeys[0];
  const cB = classesKeys[1] || cA;
  const idsCombinados = COMBINACOES_13_CLASSES[cA]?.[cB] || RECOMENDACOES_POR_CLASSE[cA] || [];
  const armasCombinadas = idsCombinados
    .map((id) => CATALOGO_ARMAS.find((a) => a.id === id))
    .filter(Boolean);

  const ehCombinacao = classesKeys.length > 1;
  return {
    idsRecomendados: idsCombinados,
    titulo: ehCombinacao
      ? `Recomendações Combinadas (${nomesClasses.join(" + ")})`
      : `Armas Recomendadas — ${nomesClasses[0]}`,
    descricao: ehCombinacao
      ? `Combinação de classes: unimos as recomendações de ${ARVORES_CLASSES[cA].nome} e ${ARVORES_CLASSES[cB].nome} para você escolher.`
      : `Armas recomendadas para ${ARVORES_CLASSES[cA].nome}. Se combinar outra classe na 2ª classe, as duas recomendações serão somadas aqui.`,
    armas: armasCombinadas
  };
}

function limparMunicoesIncompativeis() {
  const escolhidas = getArmasEscolhidas();
  const idsMunicaoAtivas = new Set(escolhidas.map((a) => a.municaoId).filter(Boolean));
  const portesFogoAtivos = new Set(escolhidas.filter((a) => a.topico === "dist_fogo").map((a) => a.porte));

  Object.keys(qtdMunicoes).forEach((mId) => {
    if (!idsMunicaoAtivas.has(mId)) {
      delete qtdMunicoes[mId];
    }
  });

  CATALOGO_MUNICOES_ESPECIAIS.forEach((esp) => {
    const compativel = esp.portesCompat.some((p) => portesFogoAtivos.has(p));
    if (!compativel) {
      delete qtdMunicoesEspeciais[esp.id];
    }
  });
}

function getPrecoBaseMunicaoEspecial(esp) {
  const escolhidasFogo = getArmasEscolhidas().filter((a) => a.topico === "dist_fogo" && esp.portesCompat.includes(a.porte));
  if (!escolhidasFogo.length) return esp.adicionalPreco;
  const precosBase = escolhidasFogo.map((a) => {
    const m = CATALOGO_MUNICOES.find((x) => x.id === a.municaoId);
    return m ? m.preco : 0;
  });
  const menorBase = Math.min(...precosBase);
  return menorBase + esp.adicionalPreco;
}

function sincronizarAbaMunicoes() {
  const armasComMunicao = getArmasQueExigemMunicao();
  const precisaMunicao = armasComMunicao.length > 0;

  let totalKitsMunicao = 0;
  CATALOGO_MUNICOES.forEach((mun) => { totalKitsMunicao += qtdMunicoes[mun.id] || 0; });
  CATALOGO_MUNICOES_ESPECIAIS.forEach((esp) => { totalKitsMunicao += qtdMunicoesEspeciais[esp.id] || 0; });

  if (!precisaMunicao) {
    abaSubMunicoesEl.classList.add("oculto");
    badgeContMunicaoEl.classList.add("oculto");
    if (abaSubMunicoesEl.classList.contains("ativa")) {
      ativarSubabaEquipamento("armas");
    }
  } else {
    abaSubMunicoesEl.classList.remove("oculto");
    badgeContMunicaoEl.classList.remove("oculto");
    badgeContMunicaoEl.textContent = totalKitsMunicao > 0 ? `${totalKitsMunicao}` : "Obrig.";
  }

  return { precisaMunicao, totalKitsMunicao };
}

function calcularPesoECusto() {
  limparMunicoesIncompativeis();
  let peso = 0;
  let custo = 0;
  let totalArmasQtd = 0;
  let espacoExtra = 0;

  CATALOGO_ARMAS.forEach((item) => {
    const qtd = qtdArmas[item.id] || 0;
    if (qtd > 0) {
      totalArmasQtd += qtd;
      peso += item.peso * qtd;
      custo += item.preco * qtd;
    }
  });

  CATALOGO_MUNICOES.forEach((mun) => {
    const qtd = qtdMunicoes[mun.id] || 0;
    if (qtd > 0) {
      peso += mun.peso * qtd;
      custo += mun.preco * qtd;
    }
  });

  CATALOGO_MUNICOES_ESPECIAIS.forEach((esp) => {
    const qtd = qtdMunicoesEspeciais[esp.id] || 0;
    if (qtd > 0) {
      const precoUnit = getPrecoBaseMunicaoEspecial(esp);
      peso += esp.peso * qtd;
      custo += precoUnit * qtd;
    }
  });

  defesaSelecionada.forEach((id) => {
    const item = CATALOGO_DEFESA.find((x) => x.id === id);
    if (item) {
      peso += item.peso;
      custo += item.preco;
    }
  });

  CATALOGO_EQUIPAMENTOS.forEach((item) => {
    const qtd = qtdEquipamentos[item.id] || 0;
    if (qtd > 0) {
      peso += item.peso * qtd;
      custo += item.preco * qtd;
      espacoExtra += (item.espacoBonus || 0) * qtd;
    }
  });

  const { precisaMunicao, totalKitsMunicao } = sincronizarAbaMunicoes();

  const saldo = ORCAMENTO_INICIAL - custo;
  const estourou = custo > ORCAMENTO_INICIAL;
  const atingiuTeto = custo >= ORCAMENTO_INICIAL;

  saldoRestanteEl.textContent = `R$ ${saldo.toLocaleString("pt-BR")}`;
  badgeOrcamentoEl.classList.toggle("estourado", estourou);
  resumoGastoRodapeEl.textContent =
    `Gasto: R$ ${custo.toLocaleString("pt-BR")} • Peso: ${peso.toFixed(1)} kg` +
    (espacoExtra !== 0 ? ` • Espaço bolsas: ${espacoExtra > 0 ? "+" : ""}${espacoExtra} pts` : "");

  const capacidadeAtual = DESPERTADO.recursos(valoresAtributos).capacidadeCarga;
  const temArma = totalArmasQtd > 0;
  const temMunicaoNecessaria = !precisaMunicao || totalKitsMunicao > 0;
  const temDefesa = defesaSelecionada.size === 1;
  const excedeuCarga = peso > capacidadeAtual;

  if (estourou) {
    verificadorEtapa3El.className = "caixa-verificador erro";
    verificadorEtapa3El.textContent =
      `Orçamento de R$ ${ORCAMENTO_INICIAL.toLocaleString("pt-BR")} ultrapassado (Gasto: R$ ${custo.toLocaleString("pt-BR")}). Reduza itens para liberar o avanço!`;
    btnAvancarEtapa3.disabled = true;
  } else if (excedeuCarga) {
    verificadorEtapa3El.className = "caixa-verificador erro";
    verificadorEtapa3El.textContent =
      `Sobrecarga! Peso atual (${peso.toFixed(1)} kg) ultrapassa o teto de carga (${capacidadeAtual.toFixed(1)} kg). Reduza itens ou aumente Aura/Caos na Etapa 2.`;
    btnAvancarEtapa3.disabled = true;
  } else if (!temArma || !temMunicaoNecessaria || !temDefesa) {
    const faltas = [];
    if (!temArma) faltas.push("1 arma");
    if (!temMunicaoNecessaria) faltas.push("munição na aba Munições (obrigatória para a arma escolhida)");
    if (!temDefesa) faltas.push("1 colete em Defesa");
    verificadorEtapa3El.className = "caixa-verificador pendente";
    verificadorEtapa3El.textContent =
      `Obrigatório: ${faltas.join(", ")}. Equipamentos/escudos são opcionais${!precisaMunicao ? " e munição não é exigida sem arma com munição" : ""}. Carga: ${peso.toFixed(1)}/${capacidadeAtual.toFixed(1)} kg.`;
    btnAvancarEtapa3.disabled = true;
  } else {
    verificadorEtapa3El.className = "caixa-verificador ok";
    verificadorEtapa3El.textContent = atingiuTeto
      ? `Verificador OK (Teto de R$ ${ORCAMENTO_INICIAL.toLocaleString("pt-BR")} atingido • Carga ${peso.toFixed(1)}/${capacidadeAtual.toFixed(1)} kg). Pronto para avançar!`
      : `Verificador OK: arma, ${precisaMunicao ? "munição e colete" : "colete (sem exigência de munição)"} confirmados! Carga: ${peso.toFixed(1)}/${capacidadeAtual.toFixed(1)} kg.`;
    btnAvancarEtapa3.disabled = false;
  }

  return { peso, custo, atingiuTeto, estourou, capacidadeAtual };
}

// ================= SUBABA 1: ARMAS =================
function atualizarControlesModoArma() {
  const btnRec = document.getElementById("btnModoRecomendadas");
  const btnDrop = document.getElementById("btnToggleDropdownCategorias");
  const menuDrop = document.getElementById("menuDropdownCategorias");
  const seta = document.getElementById("setaDropdownCategorias");

  btnRec.classList.toggle("ativo", modoArmasAtual === "recomendadas");
  btnDrop.classList.toggle("ativo", modoArmasAtual === "categoria");
  btnDrop.setAttribute("aria-expanded", String(dropdownCategoriasAberto));
  menuDrop.classList.toggle("oculto", !dropdownCategoriasAberto);
  if (seta) seta.textContent = dropdownCategoriasAberto ? "▴" : "▾";

  if (dropdownCategoriasAberto) {
    menuDrop.innerHTML = TOPICOS_ARMAS.map((t) => {
      const ativo = modoArmasAtual === "categoria" && t.id === filtroTipoArmaAtual;
      return `
        <button type="button" class="item-dropdown-cat ${ativo ? "ativo" : ""}" data-tipo-arma="${t.id}">
          ${t.label}
        </button>
      `;
    }).join("");

    menuDrop.querySelectorAll(".item-dropdown-cat").forEach((btn) => {
      btn.addEventListener("click", () => {
        filtroTipoArmaAtual = btn.dataset.tipoArma;
        modoArmasAtual = "categoria";
        dropdownCategoriasAberto = false;
        atualizarControlesModoArma();
        renderizarArmas();
      });
    });
  }
}

function renderizarArmas() {
  const el = document.getElementById("listaEscolhaArmas");
  const bannerEl = document.getElementById("bannerCategoriaArma");
  const { custo, atingiuTeto } = calcularPesoECusto();
  const perfil = obterPerfilRecomendacaoArmas();
  const setRecomendadas = new Set(perfil.idsRecomendados);

  let tituloBanner = "";
  let descBanner = "";
  let itensVisiveis = [];

  if (modoArmasAtual === "recomendadas") {
    tituloBanner = perfil.titulo;
    descBanner = perfil.descricao;
    itensVisiveis = perfil.armas;
  } else {
    const top = TOPICOS_ARMAS.find((t) => t.id === filtroTipoArmaAtual) || TOPICOS_ARMAS[0];
    tituloBanner = top.tituloCompleto;
    descBanner = top.descricao;
    itensVisiveis = top.id === "todas"
      ? CATALOGO_ARMAS
      : CATALOGO_ARMAS.filter((a) => a.topico === top.id);
  }

  bannerEl.innerHTML = `
    <strong>${tituloBanner}</strong>
    <p>${descBanner}</p>
  `;

  el.innerHTML = `
    <div class="lista-selecao-itens">
      ${itensVisiveis.map((item) => {
        const qtd = qtdArmas[item.id] || 0;
        const ativa = qtd > 0;
        const bloquearCompra = atingiuTeto || custo + item.preco > ORCAMENTO_INICIAL;
        const temMunicao = Boolean(item.municaoId);
        const usaQuantidade = item.id === "armas_arremesso" || item.id === "corrente";
        const ehRecomendada = setRecomendadas.has(item.id);

        const metaDetalhes = [
          `Dano: <strong>${item.dano}</strong>`,
          `Tipo: ${item.tipoDano}`,
          `Peso: ${item.peso}kg`,
          item.carga ? `Carga: ${item.carga}` : null,
          item.durabilidade ? `Durab.: ${item.durabilidade}` : null
        ].filter(Boolean).join(" • ");

        return `
          <div class="card-item-eq ${ativa ? "selecionado" : ""}">
            <div class="info-item-eq">
              <div class="titulo-item-eq">
                <strong>${item.nome}</strong>
                ${ehRecomendada ? '<span class="badge-rec">Recomendada</span>' : ""}
                ${temMunicao ? '<span class="badge-municao-req">Exige munição</span>' : ""}
              </div>
              <span class="meta-item-eq">${metaDetalhes}</span>
              ${ativa && temMunicao ? `
                <div class="meta-item-eq">
                  <span>✓ Aba Munições liberada — </span>
                  <button type="button" class="btn-subtopico link-ir-municao" data-ir-municao="1">Ir para Munições ▶</button>
                </div>
              ` : ""}
            </div>
            <div class="controles-qtd-eq">
              <span class="meta-item-eq">${item.obsPreco || `R$ ${item.preco.toLocaleString("pt-BR")}`}</span>
              ${usaQuantidade ? `
                <button type="button" class="btn-secundario btn-arma-menos" data-id="${item.id}" ${qtd <= 0 ? "disabled" : ""}>-</button>
                <span class="qtd-valor-eq">${qtd}</span>
                <button type="button" class="btn-secundario btn-arma-mais" data-id="${item.id}" ${bloquearCompra ? "disabled" : ""}>+</button>
              ` : `
                <button type="button" class="btn-secundario btn-toggle-arma" data-id="${item.id}" ${!ativa && bloquearCompra ? "disabled" : ""}>
                  ${ativa ? "Remover" : "Escolher"}
                </button>
              `}
            </div>
          </div>
        `;
      }).join("")}
    </div>
  `;

  el.querySelectorAll(".btn-toggle-arma").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      if ((qtdArmas[id] || 0) > 0) delete qtdArmas[id];
      else qtdArmas[id] = 1;
      atualizarCatalogosEquipamento();
    });
  });

  el.querySelectorAll(".btn-arma-menos").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      qtdArmas[id] = Math.max(0, (qtdArmas[id] || 0) - 1);
      if (qtdArmas[id] === 0) delete qtdArmas[id];
      atualizarCatalogosEquipamento();
    });
  });

  el.querySelectorAll(".btn-arma-mais").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      qtdArmas[id] = (qtdArmas[id] || 0) + 1;
      atualizarCatalogosEquipamento();
    });
  });

  el.querySelectorAll(".link-ir-municao").forEach((btn) => {
    btn.addEventListener("click", () => ativarSubabaEquipamento("municoes"));
  });
}

document.getElementById("btnModoRecomendadas").addEventListener("click", () => {
  modoArmasAtual = "recomendadas";
  dropdownCategoriasAberto = false;
  atualizarControlesModoArma();
  renderizarArmas();
});

document.getElementById("btnToggleDropdownCategorias").addEventListener("click", () => {
  dropdownCategoriasAberto = !dropdownCategoriasAberto;
  atualizarControlesModoArma();
});

// ================= SUBABA 2: MUNIÇÕES =================
function renderizarMunicoes() {
  const el = document.getElementById("conteudoMunicoes");
  const { custo, atingiuTeto } = calcularPesoECusto();
  const escolhidas = getArmasEscolhidas();

  const idsMunicaoAtivas = new Set(escolhidas.map((a) => a.municaoId).filter(Boolean));
  const municoesDisponiveis = CATALOGO_MUNICOES.filter((m) => idsMunicaoAtivas.has(m.id));

  const armasFogoEscolhidas = escolhidas.filter((a) => a.topico === "dist_fogo");
  const portesFogoAtivos = new Set(armasFogoEscolhidas.map((a) => a.porte));
  const especiaisDisponiveis = CATALOGO_MUNICOES_ESPECIAIS.filter((esp) =>
    esp.portesCompat.some((p) => portesFogoAtivos.has(p))
  );

  if (!municoesDisponiveis.length) {
    el.innerHTML = `
      <div class="card-item-eq">
        <div class="info-item-eq">
          <strong>Nenhuma arma com munição selecionada</strong>
          <span class="desc-item-eq">
            Como você não escolheu arma de distância/fogo que exija munição, a aba de munições não é obrigatória para avançar. Se quiser usar munição, escolha uma arma compatível na aba <strong>⚔️ Armas</strong>.
          </span>
        </div>
        <button type="button" class="btn-secundario" id="btnVoltarParaArmasMun">⚔️ Voltar para Armas</button>
      </div>
    `;
    document.getElementById("btnVoltarParaArmasMun")?.addEventListener("click", () => ativarSubabaEquipamento("armas"));
    return;
  }

  let html = `
    <p class="texto-auxiliar">
      <strong>Obrigatório:</strong> você escolheu arma(s) que exigem munição, portanto selecione ao menos 1 kit/caixa compatível abaixo para liberar a 4ª etapa.
    </p>
    <h5>Munições Padrão das Armas Escolhidas</h5>
    <div class="lista-selecao-itens">
  `;

  municoesDisponiveis.forEach((mun) => {
    const qtd = qtdMunicoes[mun.id] || 0;
    const armasRelacionadas = escolhidas
      .filter((a) => a.municaoId === mun.id)
      .map((a) => a.nome)
      .join(", ");
    const atingiuMaxCarregar = qtd >= mun.maxCarregar;
    const bloquearAdd = atingiuMaxCarregar || atingiuTeto || custo + mun.preco > ORCAMENTO_INICIAL;

    html += `
      <div class="card-item-eq ${qtd > 0 ? "selecionado" : ""}">
        <div class="info-item-eq">
          <div class="titulo-item-eq">
            <strong>${mun.nome}</strong>
            <span class="badge-rec">${armasRelacionadas}</span>
          </div>
          <span class="meta-item-eq">
            Peso: <strong>${mun.peso} kg/${mun.unidade}</strong> •
            Máx. p/ carregar: <strong>${mun.maxCarregar} ${mun.maxCarregar > 1 ? mun.unidadePlural : mun.unidade}</strong> •
            Qtd. por kit: <strong>${mun.qtdPorKit}</strong>
            ${mun.espaco > 0 ? ` • Espaço: ${mun.espaco} pts` : ""}
          </span>
        </div>
        <div class="controles-qtd-eq">
          <span class="meta-item-eq">R$ ${mun.preco.toLocaleString("pt-BR")}/${mun.unidade} • Sub: ${(mun.peso * qtd).toFixed(1)}kg</span>
          <button type="button" class="btn-secundario btn-mun-menos" data-id="${mun.id}" ${qtd <= 0 ? "disabled" : ""}>-</button>
          <span class="qtd-valor-eq">${qtd}/${mun.maxCarregar}</span>
          <button type="button" class="btn-secundario btn-mun-mais" data-id="${mun.id}" ${bloquearAdd ? "disabled" : ""}>+</button>
        </div>
      </div>
    `;
  });

  html += `</div>`;

  if (especiaisDisponiveis.length > 0) {
    html += `
      <h5>Munições Especiais (Conforme o Porte da Arma de Fogo)</h5>
      <div class="lista-selecao-itens">
    `;

    especiaisDisponiveis.forEach((esp) => {
      const qtd = qtdMunicoesEspeciais[esp.id] || 0;
      const precoUnit = getPrecoBaseMunicaoEspecial(esp);
      const atingiuMax = qtd >= esp.maxCarregar;
      const bloquearAdd = atingiuMax || atingiuTeto || custo + precoUnit > ORCAMENTO_INICIAL;

      html += `
        <div class="card-item-eq ${qtd > 0 ? "selecionado" : ""}">
          <div class="info-item-eq">
            <div class="titulo-item-eq">
              <strong>${esp.nome}</strong>
              <span class="badge-municao-req">${esp.regraPorte}</span>
            </div>
            <span class="desc-item-eq">${esp.efeito}</span>
            <span class="meta-item-eq">
              Peso: <strong>${esp.peso} kg/cx</strong> •
              Máx. p/ carregar: <strong>${esp.maxCarregar} cx</strong> •
              Qtd. por caixa: <strong>${esp.qtdPorCx}</strong> •
              Adicional: +R$ ${esp.adicionalPreco}
            </span>
          </div>
          <div class="controles-qtd-eq">
            <span class="meta-item-eq">R$ ${precoUnit.toLocaleString("pt-BR")}/cx</span>
            <button type="button" class="btn-secundario btn-esp-menos" data-id="${esp.id}" ${qtd <= 0 ? "disabled" : ""}>-</button>
            <span class="qtd-valor-eq">${qtd}/${esp.maxCarregar}</span>
            <button type="button" class="btn-secundario btn-esp-mais" data-id="${esp.id}" ${bloquearAdd ? "disabled" : ""}>+</button>
          </div>
        </div>
      `;
    });

    html += `</div>`;
  }

  el.innerHTML = html;

  el.querySelectorAll(".btn-mun-menos").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      qtdMunicoes[id] = Math.max(0, (qtdMunicoes[id] || 0) - 1);
      if (qtdMunicoes[id] === 0) delete qtdMunicoes[id];
      atualizarCatalogosEquipamento();
    });
  });

  el.querySelectorAll(".btn-mun-mais").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      const mun = CATALOGO_MUNICOES.find((x) => x.id === id);
      if (!mun) return;
      qtdMunicoes[id] = Math.min(mun.maxCarregar, (qtdMunicoes[id] || 0) + 1);
      atualizarCatalogosEquipamento();
    });
  });

  el.querySelectorAll(".btn-esp-menos").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      qtdMunicoesEspeciais[id] = Math.max(0, (qtdMunicoesEspeciais[id] || 0) - 1);
      if (qtdMunicoesEspeciais[id] === 0) delete qtdMunicoesEspeciais[id];
      atualizarCatalogosEquipamento();
    });
  });

  el.querySelectorAll(".btn-esp-mais").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      const esp = CATALOGO_MUNICOES_ESPECIAIS.find((x) => x.id === id);
      if (!esp) return;
      qtdMunicoesEspeciais[id] = Math.min(esp.maxCarregar, (qtdMunicoesEspeciais[id] || 0) + 1);
      atualizarCatalogosEquipamento();
    });
  });
}

// ================= SUBABA 3: DEFESA =================
function renderizarFiltrosDefesa() {
  const el = document.getElementById("filtrosTipoDefesa");
  if (!el) return;
  el.innerHTML = TOPICOS_DEFESA.map((t) => `
    <button type="button" class="btn-filtro-tipo ${t.id === filtroTipoDefesaAtual ? "ativo" : ""}" data-tipo-def="${t.id}">
      ${t.label}
    </button>
  `).join("");
  el.querySelectorAll(".btn-filtro-tipo").forEach((btn) => {
    btn.addEventListener("click", () => {
      filtroTipoDefesaAtual = btn.dataset.tipoDef;
      renderizarFiltrosDefesa();
      renderizarDefesa();
    });
  });
}

function renderizarDefesa() {
  const el = document.getElementById("listaEscolhaDefesa");
  const { custo } = calcularPesoECusto();
  const itensVisiveis = CATALOGO_DEFESA.filter((d) => d.cat === filtroTipoDefesaAtual);

  const coleteAtualId = [...defesaSelecionada][0];
  const precoColeteAtual = coleteAtualId ? (CATALOGO_DEFESA.find((x) => x.id === coleteAtualId)?.preco || 0) : 0;

  el.innerHTML = itensVisiveis.map((item) => {
    const ativa = defesaSelecionada.has(item.id);
    const custoComTroca = custo - precoColeteAtual + item.preco;
    const bloquearCompra = !ativa && custoComTroca > ORCAMENTO_INICIAL;
    return `
      <div class="card-item-eq ${ativa ? "selecionado" : ""}">
        <div class="info-item-eq">
          <strong>${item.nome}</strong>
          <span class="meta-item-eq">${item.dano} • ${item.tipoDano}</span>
        </div>
        <div class="controles-qtd-eq">
          <span class="meta-item-eq">${item.peso}kg • R$ ${item.preco.toLocaleString("pt-BR")}</span>
          <button type="button" class="btn-secundario btn-toggle-def" data-id="${item.id}" ${bloquearCompra ? "disabled" : ""}>
            ${ativa ? "Remover" : "Escolher"}
          </button>
        </div>
      </div>
    `;
  }).join("");

  el.querySelectorAll(".btn-toggle-def").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      if (defesaSelecionada.has(id)) {
        defesaSelecionada.delete(id);
      } else {
        defesaSelecionada.clear();
        defesaSelecionada.add(id);
      }
      atualizarCatalogosEquipamento();
    });
  });
}

// ================= SUBABA 4: EQUIPAMENTOS OPCIONAIS =================
function renderizarFiltrosEquipamentos() {
  const el = document.getElementById("filtrosTipoEquip");
  if (!el) return;
  el.innerHTML = TOPICOS_EQUIPAMENTOS.map((t) => `
    <button type="button" class="btn-filtro-tipo ${t.id === filtroTipoEquipAtual ? "ativo" : ""}" data-tipo-eq="${t.id}">
      ${t.label}
    </button>
  `).join("");
  el.querySelectorAll(".btn-filtro-tipo").forEach((btn) => {
    btn.addEventListener("click", () => {
      filtroTipoEquipAtual = btn.dataset.tipoEq;
      renderizarFiltrosEquipamentos();
      renderizarEquipamentosComQuantidade();
    });
  });
}

function renderizarEquipamentosComQuantidade() {
  const el = document.getElementById("listaEscolhaItens");
  const { custo, atingiuTeto } = calcularPesoECusto();
  const itensVisiveis = CATALOGO_EQUIPAMENTOS.filter((i) => i.cat === filtroTipoEquipAtual);

  el.innerHTML = itensVisiveis.map((item) => {
    const qtd = qtdEquipamentos[item.id] || 0;
    const atingiuMaxBasico = item.maxBasico !== null && qtd >= item.maxBasico;
    const bloquearAdd = atingiuMaxBasico || atingiuTeto || custo + item.preco > ORCAMENTO_INICIAL;
    return `
      <div class="card-item-eq ${qtd > 0 ? "selecionado" : ""}">
        <div class="info-item-eq">
          <div class="titulo-item-eq">
            <strong>${item.nome}</strong>
            <span class="badge-rec">${item.dano}</span>
          </div>
          <span class="meta-item-eq">${item.efeito} • Peso: ${item.peso}kg/un • R$ ${item.preco.toLocaleString("pt-BR")}/un</span>
        </div>
        <div class="controles-qtd-eq">
          <span class="meta-item-eq">Sub: ${(item.peso * qtd).toFixed(1)}kg</span>
          <button type="button" class="btn-secundario btn-qtd-menos" data-id="${item.id}" ${qtd <= 0 ? "disabled" : ""}>-</button>
          <span class="qtd-valor-eq">${item.maxBasico ? `${qtd}/${item.maxBasico}` : qtd}</span>
          <button type="button" class="btn-secundario btn-qtd-mais" data-id="${item.id}" ${bloquearAdd ? "disabled" : ""}>+</button>
        </div>
      </div>
    `;
  }).join("");

  el.querySelectorAll(".btn-qtd-menos").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      qtdEquipamentos[id] = Math.max(0, (qtdEquipamentos[id] || 0) - 1);
      if (qtdEquipamentos[id] === 0) delete qtdEquipamentos[id];
      atualizarCatalogosEquipamento();
    });
  });

  el.querySelectorAll(".btn-qtd-mais").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      const item = CATALOGO_EQUIPAMENTOS.find((x) => x.id === id);
      const prox = (qtdEquipamentos[id] || 0) + 1;
      qtdEquipamentos[id] = item?.maxBasico ? Math.min(item.maxBasico, prox) : prox;
      atualizarCatalogosEquipamento();
    });
  });
}

function atualizarCatalogosEquipamento() {
  calcularPesoECusto();
  atualizarControlesModoArma();
  renderizarArmas();
  renderizarMunicoes();
  renderizarDefesa();
  renderizarEquipamentosComQuantidade();
}

// ================= RECOMENDAÇÃO DE PONTOS NO HEXÁGONO (13 CLASSES + COMBINAÇÕES) =================
const ATRIBUTOS_DISTRIBUIVEIS = ["Caos", "Aura", "Espírito", "Vontade", "Mente"];

function calcularSugestaoPontosHexagono(primariaKey, secundariaKey) {
  const distribuicao = { Caos: 0, Aura: 0, Espírito: 0, Vontade: 0, Mente: 0 };

  if (!primariaKey || primariaKey === "nenhuma" || !ARVORES_CLASSES[primariaKey]) {
    Object.assign(distribuicao, { Caos: 2, Aura: 2, Espírito: 2, Vontade: 1, Mente: 2 });
    return {
      distribuicao,
      titulo: "Distribuição Base: 2 Caos • 2 Aura • 2 Espírito • 2 Mente • 1 Vontade",
      consensoTexto: "Base equilibrada entre os atributos e perícias gerais.",
      periciasAlvo: []
    };
  }

  const c1 = ARVORES_CLASSES[primariaKey];
  const temSecundaria = Boolean(secundariaKey && secundariaKey !== primariaKey && ARVORES_CLASSES[secundariaKey]);
  const c2 = temSecundaria ? ARVORES_CLASSES[secundariaKey] : null;

  ATRIBUTOS_DISTRIBUIVEIS.forEach((atr) => {
    distribuicao[atr] = 1;
  });

  const pesoPrimario = temSecundaria ? 0.65 : 1.0;
  const pesoSecundario = temSecundaria ? 0.35 : 0.0;

  const pontuacaoBruta = {};
  ATRIBUTOS_DISTRIBUIVEIS.forEach((atr) => {
    const p1 = c1.pesosHex?.[atr] || 0;
    const p2 = c2 ? (c2.pesosHex?.[atr] || 0) : 0;
    const consensoBonus = temSecundaria && p1 >= 2 && p2 >= 2 ? 0.5 : 0;
    const apoioPericiaBonus =
      (c1.periciasFoco?.some((p) => DESPERTADO.pericias[p]?.includes(atr)) ? 0.35 : 0) +
      (c2?.periciasFoco?.some((p) => DESPERTADO.pericias[p]?.includes(atr)) ? 0.25 : 0);

    pontuacaoBruta[atr] = p1 * pesoPrimario + p2 * pesoSecundario + consensoBonus + apoioPericiaBonus;
  });

  const ordenados = [...ATRIBUTOS_DISTRIBUIVEIS].sort((a, b) => pontuacaoBruta[b] - pontuacaoBruta[a]);
  let restantes = PONTOS_INICIAIS - Object.values(distribuicao).reduce((s, v) => s + v, 0);

  while (restantes > 0) {
    let escolhido = null;
    let melhorScore = -Infinity;
    for (const atr of ordenados) {
      if (distribuicao[atr] >= LIMITE_INICIAL_ATRIBUTO) continue;
      const scoreAjustado = pontuacaoBruta[atr] - (distribuicao[atr] - 1) * 0.65;
      if (scoreAjustado > melhorScore) {
        melhorScore = scoreAjustado;
        escolhido = atr;
      }
    }
    if (!escolhido) break;
    distribuicao[escolhido] += 1;
    restantes -= 1;
  }

  const periciasAlvo = [
    c1.pericia,
    ...(c1.periciasFoco || []),
    ...(c2 ? [c2.pericia, ...(c2.periciasFoco || [])] : [])
  ].filter((p, idx, arr) => p && arr.indexOf(p) === idx).slice(0, 5);

  const resumoAtr = ATRIBUTOS_DISTRIBUIVEIS
    .map((a) => `${distribuicao[a]} ${a}`)
    .join(" • ");

  const consensoTexto = temSecundaria
    ? `Foco principal em <strong>${c1.nome}</strong> (${c1.focoCombate}; perícia <strong>${c1.pericia}</strong> +3) e secundária em <strong>${c2.nome}</strong> (${c2.focoCombate}; perícia <strong>${c2.pericia}</strong> +2), cobrindo <strong>${periciasAlvo.join(", ")}</strong>.`
    : `Foco em <strong>${c1.nome}</strong> (${c1.focoCombate}; perícia <strong>${c1.pericia}</strong> +3).`;

  return {
    distribuicao,
    titulo: temSecundaria
      ? `${c1.nome} + ${c2.nome}: ${resumoAtr}`
      : `${c1.nome}: ${resumoAtr}`,
    consensoTexto,
    periciasAlvo
  };
}

function aplicarSugestaoPontosHexagono(distribuicao) {
  DESPERTADO.atributos.forEach((a) => {
    if (!a.travado) {
      valoresAtributos[a.nome] = distribuicao[a.nome] || 0;
    }
  });
  recalcularFicha();
}

function atualizarRecomendacaoHexagono() {
  if (!sugestaoClasseArmaEl) return;
  const raizKey = sel1.value;
  const secCombinadaKey = sel2.value.startsWith("mudar:") ? sel2.value.split(":")[1] : "nenhuma";
  const sug = calcularSugestaoPontosHexagono(raizKey, secCombinadaKey);

  const chipsAtr = ATRIBUTOS_DISTRIBUIVEIS
    .map((atr) => `<span class="tag-arma-sug">${atr}: ${sug.distribuicao[atr]}</span>`)
    .join("");

  sugestaoClasseArmaEl.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap;">
      <strong>${sug.titulo}</strong>
      <button type="button" class="btn-secundario" id="btnAplicarSugestaoHex">Aplicar</button>
    </div>
    <p>${sug.consensoTexto}</p>
    <div class="tags-armas-sugeridas">${chipsAtr}</div>
  `;

  document.getElementById("btnAplicarSugestaoHex")?.addEventListener("click", () => {
    aplicarSugestaoPontosHexagono(sug.distribuicao);
  });
}

function pontosRestantes() {
  const gastos = DESPERTADO.atributos
    .filter((a) => !a.travado)
    .reduce((acc, a) => acc + (valoresAtributos[a.nome] || 0), 0);
  return PONTOS_INICIAIS - gastos;
}

function tentarAlterarAtributo(nome, delta) {
  const cfg = DESPERTADO.atributos.find((a) => a.nome === nome);
  if (!cfg || cfg.travado) return;
  const atual = valoresAtributos[nome] || 0;
  const prox = atual + delta;
  if (prox < 0 || prox > LIMITE_INICIAL_ATRIBUTO) return;
  if (delta > 0 && pontosRestantes() < delta) return;
  valoresAtributos[nome] = prox;
  recalcularFicha();
}

function montarHexagono() {
  DESPERTADO.atributos.forEach((atr) => {
    valoresAtributos[atr.nome] = atr.inicial;
    const slot = document.getElementById(atr.idSlot);
    if (!slot) return;
    slot.classList.toggle("travado", Boolean(atr.travado));
    slot.innerHTML = `
      <span class="nome-attr" style="color:${atr.cor}">${atr.nome}</span>
      <span class="valor-attr" id="val-${atr.nome}">${atr.inicial}</span>
      ${atr.travado ? '<span class="meta-item-eq">Mestre</span>' : `
        <div class="botoes-attr">
          <button type="button" class="btn-attr btn-menos" data-atr="${atr.nome}">-</button>
          <button type="button" class="btn-attr btn-mais" data-atr="${atr.nome}">+</button>
        </div>
      `}
    `;
    if (!atr.travado) {
      slot.querySelector(".btn-menos").addEventListener("click", () => tentarAlterarAtributo(atr.nome, -1));
      slot.querySelector(".btn-mais").addEventListener("click", () => tentarAlterarAtributo(atr.nome, 1));
    }
  });
}

function popularSelect1() {
  sel1.innerHTML =
    `<option value="nenhuma">Nenhuma (1ª Classe)</option>` +
    Object.entries(ARVORES_CLASSES).map(([k, info]) => `<option value="${k}">${info.nome}</option>`).join("");
}

function sincronizarOpcoesArvore() {
  const prev2 = sel2.value;
  const prev3 = sel3.value;
  const raizKey = sel1.value;

  if (raizKey === "nenhuma") {
    sel2.innerHTML = `<option value="nenhuma">Escolha a 1ª classe</option>`;
    sel3.innerHTML = `<option value="nenhuma">Escolha a 2ª classe</option>`;
    return;
  }

  const arvoreRaiz = ARVORES_CLASSES[raizKey];
  let opcoes2 = `<option value="nenhuma">Nenhuma (Manter 1ª)</option>`;
  Object.entries(arvoreRaiz.secundarias).forEach(([secKey, secObj]) => {
    opcoes2 += `<option value="ramo:${secKey}">${secObj.nome} (Ramo)</option>`;
  });
  Object.entries(ARVORES_CLASSES).forEach(([outraKey, outraObj]) => {
    if (outraKey !== raizKey) {
      opcoes2 += `<option value="mudar:${outraKey}">Combinar c/ ${outraObj.nome}</option>`;
    }
  });
  sel2.innerHTML = opcoes2;
  sel2.value = [...sel2.options].some((o) => o.value === prev2) ? prev2 : "nenhuma";

  let opcoes3 = `<option value="nenhuma">Nenhuma (3ª Classe)</option>`;
  if (sel2.value.startsWith("ramo:")) {
    const secObj = arvoreRaiz.secundarias[sel2.value.split(":")[1]];
    Object.entries(secObj?.terciarias || {}).forEach(([tercKey, tercObj]) => {
      opcoes3 += `<option value="terc:${tercKey}">${tercObj.nome}</option>`;
    });
  } else if (sel2.value.startsWith("mudar:")) {
    const novaArvore = ARVORES_CLASSES[sel2.value.split(":")[1]];
    Object.entries(novaArvore?.secundarias || {}).forEach(([secKey, secObj]) => {
      opcoes3 += `<option value="sec_outra:${secKey}">${secObj.nome} (${novaArvore.nome})</option>`;
    });
  }
  sel3.innerHTML = opcoes3;
  sel3.value = [...sel3.options].some((o) => o.value === prev3) ? prev3 : "nenhuma";
}

function avaliarClasses() {
  sincronizarOpcoesArvore();
  atualizarCabecalhoTopoFicha();
  const raizKey = sel1.value;
  const destaques = new Set();
  const bonusPericias = {};
  const cards = [];

  const adicionarBonusPericia = (pericia, valor) => {
    if (!pericia || !valor) return;
    destaques.add(pericia);
    bonusPericias[pericia] = (bonusPericias[pericia] || 0) + valor;
  };

  if (raizKey === "nenhuma") {
    statusArvoreBadge.className = "status-arvore warn";
    statusArvoreBadge.textContent = "Árvore inativa: escolha a 1ª classe.";
    avisoRegraClasse.textContent = "";
    resumoClassesAtivas.innerHTML = "";
    return { destaques, bonusPericias };
  }

  const arvore = ARVORES_CLASSES[raizKey];
  const mudouNa2 = sel2.value.startsWith("mudar:");
  const novaClasse2Key = mudouNa2 ? sel2.value.split(":")[1] : null;
  const ramo2Key = sel2.value.startsWith("ramo:") ? sel2.value.split(":")[1] : null;

  if (arvore.pericia) {
    adicionarBonusPericia(arvore.pericia, 3);
  }

  if (mudouNa2) {
    const novaArvore = ARVORES_CLASSES[novaClasse2Key];
    statusArvoreBadge.className = "status-arvore ok";
    statusArvoreBadge.textContent = `Combinação ativa: ${arvore.nome} (1ª) + ${novaArvore.nome} (2ª)`;
    avisoRegraClasse.textContent = `1ª classe dá +3 na perícia principal e 2ª classe dá +2 na perícia secundária.`;
  } else if (ramo2Key) {
    const secObj = arvore.secundarias[ramo2Key];
    statusArvoreBadge.className = "status-arvore ok";
    statusArvoreBadge.textContent = `Linha ativa: ${arvore.nome} → ${secObj.nome}`;
    avisoRegraClasse.textContent = `3ª classe restrita aos ramos de ${secObj.nome}.`;
  } else {
    statusArvoreBadge.className = "status-arvore ok";
    statusArvoreBadge.textContent = `Foco em ${arvore.nome}`;
    avisoRegraClasse.textContent = `Escolha um ramo ou combine outra classe na 2ª classe.`;
  }

  cards.push(`
    <div class="card-classe-ativa">
      <strong>1ª (Principal): ${arvore.nome} • ${arvore.prof} • Perícia: ${arvore.pericia} (+3)</strong>
      <span>${mudouNa2 ? arvore.passivaBase : arvore.passivaCompleta}</span>
    </div>
  `);

  if (ramo2Key && arvore.secundarias[ramo2Key]) {
    const r2 = arvore.secundarias[ramo2Key];
    if (r2.pericia) adicionarBonusPericia(r2.pericia, 2);
    cards.push(`<div class="card-classe-ativa"><strong>2ª: ${r2.nome} • ${r2.prof} • Perícia: ${r2.pericia} (+2)</strong></div>`);
  } else if (mudouNa2 && ARVORES_CLASSES[novaClasse2Key]) {
    const c2 = ARVORES_CLASSES[novaClasse2Key];
    if (c2.pericia) adicionarBonusPericia(c2.pericia, 2);
    cards.push(`<div class="card-classe-ativa"><strong>2ª (Secundária): ${c2.nome} • ${c2.prof} • Perícia: ${c2.pericia} (+2)</strong></div>`);
  }

  if (sel3.value.startsWith("terc:") && ramo2Key) {
    const t3 = arvore.secundarias[ramo2Key].terciarias[sel3.value.split(":")[1]];
    if (t3) cards.push(`<div class="card-classe-ativa"><strong>3ª: ${t3.nome} • ${t3.prof}</strong></div>`);
  } else if (sel3.value.startsWith("sec_outra:") && mudouNa2) {
    const secOutra = ARVORES_CLASSES[novaClasse2Key]?.secundarias[sel3.value.split(":")[1]];
    if (secOutra) cards.push(`<div class="card-classe-ativa"><strong>3ª (${ARVORES_CLASSES[novaClasse2Key].nome}): ${secOutra.nome} • ${secOutra.prof.replace("+4", "+3")}</strong></div>`);
  }

  resumoClassesAtivas.innerHTML = cards.join("");
  return { destaques, bonusPericias };
}

function recalcularFicha() {
  const rest = pontosRestantes();
  pontosRestantesEl.textContent = rest;
  badgePontosEl.classList.toggle("completo", rest === 0);

  DESPERTADO.atributos.forEach((atr) => {
    const val = valoresAtributos[atr.nome] || 0;
    const valEl = document.getElementById(`val-${atr.nome}`);
    if (valEl) valEl.textContent = val;
    if (!atr.travado) {
      const bMenos = document.querySelector(`.btn-menos[data-atr="${atr.nome}"]`);
      const bMais = document.querySelector(`.btn-mais[data-atr="${atr.nome}"]`);
      if (bMenos) bMenos.disabled = val <= 0;
      if (bMais) bMais.disabled = val >= LIMITE_INICIAL_ATRIBUTO || rest <= 0;
    }
  });

  const rec = DESPERTADO.recursos(valoresAtributos);
  document.getElementById("statVida").textContent = rec.vida;
  document.getElementById("statSanidade").textContent = rec.sanidade;
  document.getElementById("statEE").textContent = rec.ee;

  const { peso, capacidadeAtual } = calcularPesoECusto();
  sobrecarregadoAtual = peso > capacidadeAtual;
  const classeEscolhida = sel1.value !== "nenhuma";
  const pontosConcluidos = rest === 0;

  if (sobrecarregadoAtual) {
    verificadorPesoCargaEl.className = "caixa-verificador erro";
    verificadorPesoCargaEl.textContent =
      `Sobrecarga! Peso atual (${peso.toFixed(1)} kg) ultrapassa o teto de carga (${capacidadeAtual.toFixed(1)} kg). Vá para Equipamentos (Etapa 3) ou aumente Aura/Caos.`;
    btnAvancarEtapa2.disabled = true;
    btnVoltarEquipamentosSobrecarga.classList.remove("oculto");
  } else if (!classeEscolhida || !pontosConcluidos) {
    const pendencias = [];
    if (!classeEscolhida) pendencias.push("escolher pelo menos a 1ª classe");
    if (!pontosConcluidos) pendencias.push(`distribuir todos os ${PONTOS_INICIAIS} pontos do Hexágono (faltam ${rest})`);
    verificadorPesoCargaEl.className = "caixa-verificador pendente";
    verificadorPesoCargaEl.textContent =
      `Carga OK (${peso.toFixed(1)}/${capacidadeAtual.toFixed(1)} kg). Para liberar os Equipamentos (Etapa 3), falta: ${pendencias.join(" e ")}.`;
    btnAvancarEtapa2.disabled = true;
    btnVoltarEquipamentosSobrecarga.classList.add("oculto");
  } else {
    verificadorPesoCargaEl.className = "caixa-verificador ok";
    verificadorPesoCargaEl.textContent =
      `Tudo pronto! Classe definida, ${PONTOS_INICIAIS}/${PONTOS_INICIAIS} pontos distribuídos e carga OK (${peso.toFixed(1)}/${capacidadeAtual.toFixed(1)} kg). Etapa 3 (Equipamentos) liberada!`;
    btnAvancarEtapa2.disabled = false;
    btnVoltarEquipamentosSobrecarga.classList.add("oculto");
  }

  if (maiorEtapaLiberada >= 3 && (sobrecarregadoAtual || !classeEscolhida || !pontosConcluidos)) {
    maiorEtapaLiberada = 2;
    document.querySelectorAll(".btn-etapa").forEach((b) => {
      const n = Number(b.dataset.etapa);
      b.classList.toggle("bloqueada", n > maiorEtapaLiberada);
      b.disabled = n > maiorEtapaLiberada;
    });
  }

  const { bonusPericias } = avaliarClasses();
  atualizarRecomendacaoHexagono();
  listaPericias.innerHTML = "";

  let temAlgumBonusClasse = false;

  Object.entries(DESPERTADO.pericias).forEach(([pericia, deps]) => {
    const baseAtr = deps.reduce((acc, n) => acc + (valoresAtributos[n] || 0), 0);
    const bonusClasse = bonusPericias[pericia] || 0;
    const total = baseAtr + bonusClasse;
    const temBuf = bonusClasse > 0;
    if (temBuf) temAlgumBonusClasse = true;

    const div = document.createElement("div");
    div.className = `card-pericia ${temBuf ? "destaque-pericia" : ""}`;
    div.innerHTML = `
      <span>${pericia}</span>
      <span style="display:inline-flex;align-items:center;gap:6px;">
        ${temBuf ? `<span class="setinha-buf-pericia" style="color:#34d399;font-size:0.85em;font-weight:700;">▲ +${bonusClasse}</span>` : ""}
        <strong>${total}</strong>
      </span>
    `;
    listaPericias.appendChild(div);
  });

  // Observação logo abaixo das perícias calculadas e acima de Vida / Sanidade / E.E.
  let legendaEl = document.getElementById("legendaPericiasClasse");
  if (!legendaEl) {
    legendaEl = document.createElement("div");
    legendaEl.id = "legendaPericiasClasse";
    legendaEl.className = "legenda-pericias-classe";
    listaPericias.insertAdjacentElement("afterend", legendaEl);
  }

  if (temAlgumBonusClasse) {
    legendaEl.classList.remove("oculto");
    legendaEl.innerHTML = `
      <strong>Observação:</strong> As setinhas verdes (<span class="seta-exemplo">▲ +X</span>) indicam quanto a classe adicionou na perícia. O número em <span class="valor-exemplo">destaque esmeralda</span> já é o <strong>total somado</strong> (perícia padrão dos atributos + perícia da classe).
    `;
  } else {
    legendaEl.classList.add("oculto");
  }
}

btnResetPontos.addEventListener("click", () => {
  DESPERTADO.atributos.forEach((a) => { if (!a.travado) valoresAtributos[a.nome] = 0; });
  recalcularFicha();
});
[sel1, sel2, sel3].forEach((s) => s.addEventListener("change", () => {
  modoArmasAtual = "recomendadas";
  recalcularFicha();
}));

document.getElementById("btnEnviarMestre").addEventListener("click", () => {
  const { peso, custo, capacidadeAtual } = calcularPesoECusto();
  const nomesArmas = CATALOGO_ARMAS
    .filter((x) => (qtdArmas[x.id] || 0) > 0)
    .map((x) => `${x.nome}${(qtdArmas[x.id] || 0) > 1 ? ` x${qtdArmas[x.id]}` : ""} (${x.dano}, ${x.tipoDano})`)
    .join("; ") || "Nenhuma";

  const munBaseLista = CATALOGO_MUNICOES
    .filter((x) => (qtdMunicoes[x.id] || 0) > 0)
    .map((x) => `${x.nome} x${qtdMunicoes[x.id]}`);
  const munEspLista = CATALOGO_MUNICOES_ESPECIAIS
    .filter((x) => (qtdMunicoesEspeciais[x.id] || 0) > 0)
    .map((x) => `${x.nome} x${qtdMunicoesEspeciais[x.id]}`);
  const nomesMunicoes = [...munBaseLista, ...munEspLista].join(", ") || (getArmasQueExigemMunicao().length ? "Nenhuma" : "Não exigida");

  const nomesDefesa = CATALOGO_DEFESA.filter((x) => defesaSelecionada.has(x.id)).map((x) => x.nome).join(", ") || "Nenhuma";
  const nomesItens = CATALOGO_EQUIPAMENTOS
    .filter((x) => (qtdEquipamentos[x.id] || 0) > 0)
    .map((x) => `${x.nome} x${qtdEquipamentos[x.id]}`)
    .join(", ") || "Nenhum";
  const atrLinha = DESPERTADO.atributos.map((a) => `${a.nome}: ${valoresAtributos[a.nome] || 0}`).join(" | ");

  const resumo = [
    "=== FICHA MALSENTOF — PRONTA PARA INJEÇÃO PELO MESTRE ===",
    `Nome: ${inputNome.value.trim() || "Sem nome"} | Tipo: ${selectTipo.value || "Despertado"}`,
    `Idade: ${inputIdade.value || "-"} | Altura: ${inputAltura.value || "-"} | Peso: ${inputPesoCorporal.value || "-"}`,
    `Aparência: ${inputAparencia.value.trim() || "-"}`,
    `Roleplay/História: ${inputHistoria.value.trim() || "-"}`,
    `Classes: 1ª=${sel1.value} | 2ª=${sel2.value} | 3ª=${sel3.value}`,
    `Hexágono (9 pts + Âmago): ${atrLinha}`,
    `Armas: ${nomesArmas}`,
    `Munições: ${nomesMunicoes}`,
    `Defesa (Coletes): ${nomesDefesa}`,
    `Equipamentos: ${nomesItens}`,
    `Gasto: R$ ${custo.toLocaleString("pt-BR")} / R$ ${ORCAMENTO_INICIAL.toLocaleString("pt-BR")} | Carga: ${peso.toFixed(1)}kg / ${capacidadeAtual.toFixed(1)}kg`,
    ...(selectTipo.value === "Sintético"
      ? ["Modo Sintético: sem Despertar espiritual (aguardando validação de implantes/status pelo mestre)."]
      : selectTipo.value === "Aberração"
      ? [
          `Poder Específico da Aberração: ${document.getElementById("inputGatilhoDespertar").value.trim() || "-"}`,
          `Funcionamento / Adaptação do Mestre: ${document.getElementById("inputDesejoDespertar").value.trim() || "-"}`
        ]
      : [
          `Despertar (Gatilho/Base): ${document.getElementById("inputGatilhoDespertar").value.trim() || "-"}`,
          `Manifestação/Observações: ${document.getElementById("inputDesejoDespertar").value.trim() || "-"}`
        ]),
    "[Ação do Mestre: validar ficha, ajustar E.E./dano final e injetar no jogo]"
  ].join("\n");

  document.getElementById("saidaFichaMestre").textContent = resumo;
  document.getElementById("painelEnvioMestre").classList.remove("oculto");
});

document.getElementById("btnCopiarFicha").addEventListener("click", () => {
  navigator.clipboard?.writeText(document.getElementById("saidaFichaMestre").textContent);
});

renderizarConteudoLivro();
renderizarFiltrosDefesa();
renderizarFiltrosEquipamentos();
atualizarCatalogosEquipamento();
popularSelect1();
montarHexagono();
recalcularFicha();
validarEtapa1();