# React を勉強してみる

## 目次 {ignore=true}

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [React プロジェクトを作成する](#react-プロジェクトを作成する)
- [絶対パスを用いて Import する](#絶対パスを用いて-import-する)
- [Material-UI を導入する](#material-ui-を導入する)
- [React Router を導入する](#react-router-を導入する)
- [Redux を導入する](#redux-を導入する)
- [参考ページ](#参考ページ)

<!-- /code_chunk_output -->

## React プロジェクトを作成する

プロジェクトを作成するには次を実行します。

```sh
npx create-react-app react-base
cd react-base
```

サーバを起動するには以下を実行します。

```sh
npm start
```

`http://localhost:3000/`にアクセスして画面が表示されれば、成功です。

## 絶対パスを用いて Import する

src/components/Button.js を Import したい際にソースに以下のように記載することができます。（テストコード記載時などに便利です。）

```js
import Button from "components/Button";
```

設定方法は以下を記載した jsconfig.json をプロジェクトルートに作成する

```json
{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": ["src"]
}
```

## Material-UI を導入する

デザインをいちから作成するためには時間も労力もかかるため React で最も利用されている CSS Framework である Material-UI を導入する。Material-UI を導入するには以下を実行します。

```shell
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
```

## React Router を導入する

本来単一ページ SPA を複数ページが存在するような画面遷移を実現するために react-router-dom を導入する。react-router-dom を導入するには以下を実行します。

```shell
npm install react-router-dom
```

## 参考ページ
