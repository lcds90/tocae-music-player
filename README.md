# Desafio - Manipulaê

<div align="center">

_Projeto desenvolvido para processo seletivo na [Manipulaê](https://manipulae.com.br/)_

<img src="https://manipulae.com.br/share_image.png" alt="drawing" width="200"/>

## Sumário:

[Sobre](#about) |
[Rotas da aplicação](#routes) |
[Regras de negócio](#rules) |
[Informações](#informations)

</div>

---

## :bookmark_tabs: Sobre o projeto <a name="about"></a>

Nesse projeto foi desenvolvido uma **Webapp** utilizando as tecnologias principais sendo **React**, **Redux**.
Nesse projeto estou desenvolvendo as seguintes capacidades:

- Estruturação
- Estilização
- Integração
- Manipulação de dados

O título que a aplicação tem é Tocaê e irá implementar o design semelhante a da [página principal](https://manipulae.com.br/)

<h3 align="center">

:globe_with_meridians: [Deploy](https://api-catalog-list.herokuapp.com/)

</h3>

O objetivo será implementar um Webapp de listagem e pré-visualização de músicas.
Para isso será utilizado a API do Deezer para requisitar os dados necessários, a documentação estará disponível no link a seguir (https://developers.deezer.com/api/explorer?url=chart)

## :large_blue_circle: Regras de Negócio <a name="rules"></a>

- [x] Configuração
  - [x] React
  - [x] Redux
  - [x] Axios
  - [x] Styled Components
- [ ] Testes
- [x] 1º View
  - [x] Deverá apresentar a lista das principais músicas do momento listadas na Deezer;
  - [x] Também deve existir um campo de pesquisa por texto onde podemos pesquisar por álbum, artista, ou título musical;
  - [x] Quando realizar alguma pesquisa, a listagem inicial deve ser substituída pela listagem referente a pesquisa. (Usar o mesmo componente de listagem)
  - [x] Itens da lista devem apresentar:
    - [x] Os dados da música como (capa do álbum, título, cantor, duração);
    - [x] Um botão para acessar a musica completa no Deezer;
    - [x] Um botão de play/pause para escutar a prévia da música;
    - [x] Um botão para adicionar a música na lista de músicas favoritas;
- [x] 2º View
  - [x] Será apresentada a lista com as músicas escolhidas pelo usuário na tela principal.
  - [x] A listagem deve ser semelhante a da tela inicial, porém deve mostrar o botão para remover da lista de favoritos.
- [x] Bonus
  - [x] Listagem de musicas deve estar contida na store do Redux, porém implemente no localStorage também.

---

## :books: Informações <a name="informations"></a>

#### :rocket: Execução

`yarn dev`

> Para rodar o projeto localmente .

`yarn start`

> Automatizado para produção juntamente com o arquivo Procfile para o deploy no serviço de hospedagem do heroku.

---

#### :gear: Bibliotecas

##### Padrões

1.  [Yarn](https://yarnpkg.com/): Gerenciador de depedências do projeto utilizado.
1.  [Create React App](https://create-react-app.dev/): Gera a aplicação react e suas bibliotecas padrões.
1.  [Template Redux](https://redux.js.org/introduction/installation#create-a-react-redux-app): Template CRA com implementação do Redux
<details>
<summary>Informações</summary>

`yarn create react-app music_player --template redux`

```json
  "dependencies": {
    "@reduxjs/toolkit": "^1.5.1",
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.3.2",
    "@testing-library/user-event": "^7.1.2",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-redux": "^7.2.3",
    "react-scripts": "4.0.3"
  },
```

</details>

##### Extras

1. [Axios](https://axios-http.com/): Para realização de requisições
1. [Redux](https://redux.js.org/): Para gerenciamento de estado
1. [styled-components](https://styled-components.com/): Para estilização de componentes
1. [Craco](https://yarnpkg.com/package/@craco/craco): No projeto ele é utilizado para utilizar o path aliases para facilitar o desenvolvimento, [post de referencia](https://hello-js.com/articles/path-aliases-in-react-application/)
1. [ESLint](https://eslint.org/): Para padronização de código, biblioteca somente em modo de desenvolvimento.
1. [eslint-import-resolver-alias](https://yarnpkg.com/package/eslint-import-resolver-alias): Utilizado para resolver conflitos de rotas personalizados
1. [eslint-plugin-jest](https://yarnpkg.com/package/eslint-plugin-jest): Para conseguir configurar jest com eslint
1. [React Router DOM](https://reactrouter.com/web/): Utilizado para rotas na aplicação
1. [history](https://yarnpkg.com/package/history): Para testes do router

<details>
<summary>Informações</summary>

`yarn add axios styled-components react-router-dom`
`yarn add eslint --dev`

```json
  "dependencies": {
    "axios": "^0.21.1",
    "styled-components": "^5.3.0",
    "react-router-dom": "^5.2.0",
    "@craco/craco": "^6.2.0",
  },
  "devDependencies": {
    "eslint": "^7.32.0",
    "eslint-config-airbnb": "^18.2.1",
    "eslint-import-resolver-alias": "^1.1.2",
    "eslint-plugin-import": "^2.24.0",
    "eslint-plugin-jest": "^24.4.0",
    "eslint-plugin-jsx-a11y": "^6.4.1",
    "eslint-plugin-react": "^7.24.0",
    "eslint-plugin-react-hooks": "^4.2.0"
  }
```

</details>

_Configuração ESLint_

Inicializado com o comando `yarn run eslint --init`, utilizando os seguintes padrões:

- Como é usado o eslint no projeto: 'To check syntax, find problems and enforce code style'
- Tipo de módulo utilizado no projeto: JavaScript modules (import/export)
- Tipo de framework: React
- Sem typescript
- Ambiente onde ocorre o projeto: Browser
- Style code: [Airbnb Popular Style Guide](https://github.com/airbnb/javascript)
- Arquivo de configuração: Javascript

_Regras no arquivo eslintsrc_

```json
// Como a versão utilizada é o React 17, não há necessidade do import. (JSX Transform)
'react/react-in-jsx-scope': 'off',
// O entrypoint da aplicação é o App.js como lá está definido somente o roteamento, opto por esse padrão.
'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
```

- [JSX Transform](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#removing-unused-react-imports)
- jsconfig.json, para [imports facilitados](https://saurabhshah23.medium.com/react-app-with-absolute-paths-using-jsconfig-json-2b07b1cb24d4)