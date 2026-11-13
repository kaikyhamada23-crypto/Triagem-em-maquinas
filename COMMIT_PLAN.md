# Roteiro de commits — Triagem de Computadores

Faça os commits em etapas pequenas, como se estivesse desenvolvendo o projeto ao longo do tempo.

## 1. Criar o repositório e a estrutura inicial

```bash
git init
git add index.html
git commit -m "chore: cria estrutura inicial do projeto"
```

## 2. Criar o formulário de triagem

```bash
git add index.html
git commit -m "feat: adiciona formulário de identificação dos computadores"
```

> Se o primeiro commit já incluiu o `index.html` completo, use este passo para uma alteração real posterior no formulário, em vez de repetir o mesmo arquivo sem mudanças.

## 3. Desenvolver o visual

```bash
git add style.css
git commit -m "style: cria layout responsivo para a triagem"
```

## 4. Implementar cadastro e checklist

```bash
git add script.js
git commit -m "feat: implementa cadastro e checklist de testes"
```

## 5. Adicionar histórico, busca e indicadores

```bash
git add script.js index.html
git commit -m "feat: adiciona histórico e indicadores de triagem"
```

## 6. Documentar o projeto

```bash
git add README.md .gitignore
git commit -m "docs: adiciona documentação e gitignore"
```

## 7. Preparar colaboração

```bash
git add .github
git commit -m "chore: adiciona modelos de issue e pull request"
```

## Publicar no GitHub

Crie um repositório vazio no GitHub (sem README, para evitar conflito) e copie a URL HTTPS dele:

```bash
git branch -M main
git remote add origin URL_DO_SEU_REPOSITORIO
git push -u origin main
```

## Criar uma Issue e um Pull Request para demonstrar o fluxo

1. No GitHub, abra **Issues > New issue** e registre uma melhoria, por exemplo: "Adicionar exportação dos registros para CSV".
2. Crie uma branch para trabalhar nessa melhoria:

```bash
git switch -c feature/exportacao-csv
```

3. Implemente a melhoria, faça commits e envie a branch:

```bash
git add .
git commit -m "feat: prepara exportação dos registros"
git push -u origin feature/exportacao-csv
```

4. No GitHub, abra **Pull requests > New pull request**, compare a branch com `main`, descreva a alteração e relacione a Issue usando `Closes #NUMERO`.
5. Depois de revisar, faça o merge do Pull Request.

**Importante:** não faça commits repetidos só para aumentar a quantidade. Cada commit deve representar uma mudança real e pequena. Se quiser mostrar o desenvolvimento em etapas, faça as alterações em partes e execute o comando de commit depois de cada etapa.
