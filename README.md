# Triagem de Computadores

Projeto web simples para registrar a triagem técnica de computadores de mesa, notebooks, mini PCs e equipamentos all-in-one em um laboratório.

## Objetivo

Organizar a entrada de computadores (desktop, notebook, mini PC e all-in-one) e registrar suas configurações e resultados básicos de teste, facilitando a identificação de máquinas aprovadas ou com pendências.

## Funcionalidades

- Cadastro de patrimônio, fabricante/modelo, processador, memória RAM e armazenamento.
- Checklist de energia, BIOS/UEFI, RAM, SSD/HD, vídeo, rede e USB.
- Classificação automática como **Aprovado** quando todos os testes estiverem marcados ou **Com pendências** quando faltar algum.
- Histórico de triagens com busca por patrimônio ou modelo.
- Contadores de equipamentos cadastrados, aprovados e com pendências.
- Persistência local no navegador usando `localStorage`.
- Layout responsivo para desktop e celular.

## Tecnologias

- HTML5
- CSS3
- JavaScript (ES6)
- `localStorage` para persistência local

## Como executar

1. Baixe ou clone este repositório.
2. Abra o arquivo `index.html` em um navegador atualizado.
3. Preencha os dados do equipamento, marque os testes realizados e clique em **Salvar triagem**.

Não é necessário instalar dependências ou configurar servidor.

## Estrutura

```text
triagem-computadores/
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   └── melhoria.md
│   └── PULL_REQUEST_TEMPLATE.md
├── index.html
├── style.css
├── script.js
├── README.md
└── .gitignore
```

## Limitações conhecidas

- Os dados ficam armazenados apenas no navegador e dispositivo em que foram cadastrados.
- O checklist é preenchido manualmente; o sistema não executa diagnóstico físico ou leitura automática de hardware.
- Para uso real em equipe, recomenda-se adicionar backend, autenticação e banco de dados.

## Próximas melhorias

- Exportar registros para CSV.
- Adicionar edição de registros.
- Criar relatórios por período.
- Integrar leitura automática de informações do hardware.

## Autor

Kaiky Hamada
