# Base : Getting Started with Create React App with TypeScript

## 1. 환경설정

1. 프로젝트 root에서 yarn install

## 2. Available Scripts

프로젝트 디렉토리에서, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

개발 환경으로 빌드

### `yarn build`

## 3. 폴더 구조

> src
> <br>
>
> > app
> > <br>
> >
> > > components (Presentation Components)
> > > <br>
> > > containers (Container Components)
> > > <br>
> > > pages (Routes)
> >
> > stores (Actions)
> > <br>
> > styles (CSSmodules (\*.module.scss))
> > <br>
> > utils (Utilities)

### pages

- 라우팅 페이지 (ex. 로그인페이지, 메인페이지, 상세페이지 ...)

### containers

- 컨테이너 컴포넌트 (ex. JSX 마크업 X, fetching 등을 통해 데이터 가공 후 프리젠테이션 컴포넌트에 넘겨줌)

### components

- 프리젠테이션 컴포넌트 (ex. JSX 마크업 O, props로 가져온 데이터 O, UI위한 state 값 O)

### stores

> Component (폴더명)
>
> > actions.ts : 액션 타입 관리
> > <br>
> > constants.ts : 액션 관리
> > <br>
> > reducer.ts : 리듀서 관리

  <!-- > api.ts : `axois 모듈` <br> `주의사항)` <br> `1) get 요청시 params 옵션 사용하지 않고 data 옵션 사용` <br> `2) baseURL default 기존 쿠폰서버, 옵션 사용하여 변경 가능`

  ```javascript
  import api from "src/utils/api";

  api
    .get("/hybridapp/renew/main/banner/list", {
      data: { banner_cat_cd: "SUB" },
      baseURL: process.env.REACT_APP_MARTUBE_API,
    })
    .then((response) => {});
  ``` -->

### styles

- Scss : \*.scss 를 \*.module.scss (CSS Module) 으로 변경하여 사용
- image : nas에 올려사용(tsx에서 직접 import 하는 이미지 제외한 모든 이미지(아이콘 등등)로컬 이미지 사용하지 않음)

### utils

- 공통 유틸리티

## 5. DO NOT COMMIT FOLDER & FILES!!

- node_modules
- build
- pakage-lock.json
- yarn.lock
- yarn-error.log

## 6 개발서버 ID 및 테스트 토큰
