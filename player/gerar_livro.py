import json
from pypdf import PdfReader

reader = PdfReader("Livro do Jogador.pdf")
paginas = []

for i, page in enumerate(reader.pages):
    bruto = page.extract_text() or ""
    linhas = [l.strip() for l in bruto.splitlines() if l.strip()]
    texto_limpo = "\n".join(linhas)
    paginas.append({
        "pagina": i + 1,
        "texto": texto_limpo
    })

with open("livro_dados.js", "w", encoding="utf-8") as f:
    f.write("const LIVRO_DO_JOGADOR_PAGINAS = ")
    json.dump(paginas, f, ensure_ascii=False, indent=2)
    f.write(";\n")

print(f"Pronto! {len(paginas)} páginas salvas em livro_dados.js")