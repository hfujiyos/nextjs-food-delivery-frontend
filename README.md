# nextjs-food-delivery-frontend

## フロントエンド開発環境の構築

- ディレクトリ作成

  ```sh
  $ mkdir nextjs-food-delivery
  $ cd nextjs-food-delivery
  $ mkdir frontend
  $ cd frontend
  ```

- Next.js インストール

  ```sh
  $ npm i next@9.4.0 react@16.13.1 react-dom@16.13.1
  ```

- package.json 更新

  ```json:package.json
  {
    "scripts": {
      "dev": "next",
      "build": "next build",
      "start": "next start"
    },
    "dependencies": {
      "next": "^9.4.0",
      "react": "^16.13.1",
      "react-dom": "^16.13.1"
    }
  }
  ```

- .gitignore 作成

  ```sh:.gitignore
  .next
  node_modules
  .env*
  ```

- .env.development 作成

  ```sh:.env.development
  NEXT_PUBLIC_API_URL=
  ```

- .prettierrc 作成

  ```json:.prettierrc
  {
    "trailingComma": "all",
    "tabWidth": 2,
    "semi": false,
    "singleQuote": true,
    "jsxSingleQuote": true,
    "printWidth": 80
  }
  ```

## 追加ライブラリ導入

- CSS 連携

  ```sh
  CSSライブラリ導入
  $ npm install reactstrap react react-dom
  ```

## ディレクトリ構成

- pages
  - \_app.js
  - index.js
- .env.development
- .gitignore
- .prettierrc
- package.json

## 開発環境動作確認

- 開発環境動作確認

  ```sh
  $ npm run dev
  ```

  http://localhost:3000

## GitHub へプッシュ

- initial commit

  ```sh
  $ git init
  $ git add .
  $ git commit -m "initial commit"
  $ git branch -m master main
  $ git remote add origin git@github.com:hfujiyos/nextjs-food-delivery-frontend.git
  $ git push -u origin main
  ```

## Apollo（GraphQL Client）の導入

- Apollo インストール

  ```sh
  $ npm i @apollo/react-hooks@3.1.5 @apollo/react-ssr@3.1.5 apollo-boost@0.4.7 apollo-link-http@1.5.17 graphql@15.0.0 next-apollo@3.1.10 --save --legacy-peer-deps
  ```

- Apollo セットアップ

  ```sh
  $ mkdir lib
  $ touch lib/apollo.js
  ```

  ```js:lib/apollo.js
  import { HttpLink } from "apollo-link-http"
  import { withData } from "next-apollo"
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"
  const config = {
    link: new HttpLink({
      uri: `${API_URL}/graphql`,
    }),
  }
  export default withData(config)
  ```

  ```js:pages/_app.js
  import withData from "../lib/apollo"
  class MyApp extends App {
    ･･･
  export default withData(MyApp)
  ```
