# nextjs-food-delivery-frontend

## フロントエンド開発環境の構築

- ディレクトリ作成

  ```sh
  $ mkdir nextjs-food-delivery
  $ cd nextjs-food-delivery
  $ mkdir frontend
  $ cd frontend
  ```

- Next.jsインストール

  ```sh
  $ npm i next@9.4.0 react@16.13.1 react-dom@16.13.1
  ```

- package.json更新

  ```json:package.json
  {
    "scripts": {
      "dev": "next",
      "build": "next build",
      "start": "next start"
      <!-- "start": "NODE_ENV=production node server.js" -->
    },
    "dependencies": {
      "next": "^9.4.0",
      "react": "^16.13.1",
      "react-dom": "^16.13.1"
    }
  }
  ```

- .gitignore作成

  ```sh:.gitignore
  .next
  node_modules
  .env*
  ```

- .env.development作成

  ```sh:.env.development
  NEXT_PUBLIC_API_URL=
  ```

- .prettierrc作成

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

- CSS連携

  ```sh
  CSSライブラリ導入
  $ npm install reactstrap react react-dom
  ```

## ディレクトリ構成

- components
  - Layout.js
- pages
  - _app.js
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

### GitHub

- initial commit
  ```
  $ git init
  $ git branch -m master main
  $ git add .
  $ git commit -m "initial commit"
  $ git remote add origin git@github.com:hfujiyos/nextjs-food-delivery-frontend.git
  $ git push -u origin main
  ```
