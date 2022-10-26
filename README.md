# Branch간 내용

## 1. webpackAndBabel

### package

```js
    "@babel/cli": "^7.19.3",
    "@babel/core": "^7.19.6",
    "@babel/preset-env": "^7.19.4",
    "babel-loader": "^8.2.5",
    "webpack": "^5.74.0",
    "webpack-cli": "^4.10.0"
```

### 추가 파일

1. .babelrc
2. webpack.config.js => babel-loader 연결

### 수행 결과

index.js - bold.js, italic.js 파일을 번들하여 dist/index.js 생성 및 트랜스파일에 의해 화살표 함수 삭제
subindex.js 파일을 번들하여 dist/subindex.js 생성 및 트랜스파일에 의해 화살표 함수 삭제

## 2. onlyBabel

### package

```js
    "@babel/cli": "^7.19.3",
    "@babel/core": "^7.19.6",
    "@babel/preset-env": "^7.19.4"
```

### 추가 파일

1. .babelrc

### 수행 결과

index.js, bold.js, italic.js , subindex.js 파일들이 각각 트랜스파일에 의해 dist 폴더에 생성되고 화살표함수는 기본함수로 변경

## 3. onlyWebpack

### package

```js
     "webpack": "^5.74.0",
    "webpack-cli": "^4.10.0"
```

### 추가 파일

1. webpack.config.js

### 수행 결과

index.js, bold.js, italic.js , subindex.js 파일들이 webpack에 의해 번들링 될 파일끼리는 번들링 된다.
index.js, bold.js, italic.js => dist/index.js
subindex.js => dist/subindex.js
(화살표함수가 사라지는 트랜스파일링은 아니다.)
