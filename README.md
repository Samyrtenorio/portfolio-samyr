# Portfólio Angular

Projeto Angular 18+ com componentes standalone, roteamento e dados centralizados.

## Como rodar

1. Crie o projeto base:
   ```bash
   npx @angular/cli@18 new portfolio --standalone --routing --style=scss --skip-tests
   cd portfolio
   ```
2. Substitua a pasta `src/` pela deste pacote.
3. Rode:
   ```bash
   npm start
   ```
4. Acesse http://localhost:4200

## O que editar

- `src/app/data/profile.ts`: todo o conteúdo (nome, resumo, experiências, projetos, stack).
- `src/styles.scss`: cores do tema (variáveis em `:root`).

Antes de publicar, troque todos os textos entre `[colchetes]` pelas informações reais do seu currículo.

## Publicar

- Build: `npm run build` (saída em `dist/`).
- Hospedagens gratuitas com build estático: Vercel, Netlify, GitHub Pages.
