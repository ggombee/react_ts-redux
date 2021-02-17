### Base : create-react-app typescript

## 1. 환경설정

1. 프로젝트 root 에서 yarn install

- yarn install 에러 발생시 처리

```
error An unexpected error occurred: "https://registry.yarnpkg.com/@testing-library%2fjest-dom: self signed certificate in certificate chain"

set NODE_TLS_REJECT_UNAUTHORIZED=0
yarn config set strict-ssl false
```

2. vscode Extentions 에서 eslint, prettier 설치 (code fommatting)
3. ctrl+shift+p > preferences: Open Settings(JSON) >

```javascript
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "editor.formatOnSave": true,
  "eslint.workingDirectories": ["./saferefront"]
}
```

## 2. Available Scripts

프로젝트 디렉토리에서:

### `yarn install`

### `yarn start`

개발 환경에서 실행

### `yarn start:prod`

운영 환경에서 실행

### `yarn build`

개발 환경으로 빌드

### `yarn build:prod`

운영 환영으로 빌드

## 3. 환경설정파일

`.env.development` : 개발
<br>
`.env.production` : 운영

## 4. 폴더 구조(Duck pattern)

> src
> <br>
>
> > components (Presentation Components)
> > <br>
> > containers (Container Components)
> > <br>
> > stores (common hooks)
> > <br>
> > styles (CSS)
> > <br>
> > types (declare types)
> > <br>
> > utils (utilities)

### components

- 프리젠테이션 컴포넌트

### containers

- 컨테이너 컴포넌트
  > Component (폴더명)
  >
  > > index.tsx : 해당 컴포넌트

### stores

> > action.ts : 액션 관리
> > <br>
> > constant.ts : 액션 타입 관리
> > <br>
> > reducer.ts : 액션 타입 관리
> > <br>
> > type.ts : 타입 관리

### styles

- Scss : 미정의
- image : 미정의

### types

- \*.d.ts 관리

### utils

- 공통 유틸리티
