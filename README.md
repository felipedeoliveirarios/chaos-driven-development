# Chaos-Driven Development

Site de documentação e blog que registra desafios e soluções de desenvolvimento. Construído com [Docusaurus 3](https://docusaurus.io/).

🌐 **Site:** https://chaos-driven-development.vercel.app

## Requisitos

- Node.js >= 20.0

## Instalação

```bash
npm install
```

## Desenvolvimento Local

```bash
npm start
```

Inicia o servidor de desenvolvimento com hot reload. As alterações são refletidas automaticamente no navegador.

## Build

```bash
npm run build
```

Gera o conteúdo estático no diretório `build/`.

## Servir Build Local

```bash
npm run serve
```

Serve a build de produção localmente para testes.

## Outros Comandos

```bash
# Verificação de tipos TypeScript
npm run typecheck

# Limpar cache
npm run clear
```

## Deploy

O site é hospedado na Vercel e faz deploy automático a partir da branch principal.

> **Nota:** O link "Arsenal de Ferramentas" na homepage aponta temporariamente para `/blog/tags` (lista geral). Ao criar o primeiro post com `tags: [ferramentas]`, atualizar o link em `src/components/HomepageFeatures/index.tsx` para `/blog/tags/ferramentas`.

## Assets:
https://pixelarticons.com/icon/braces-content/
