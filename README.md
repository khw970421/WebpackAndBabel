# Branch๊ฐ ๋ด์ฉ

## ๐ฅ 1. webpackAndBabel

### package

```js
    "@babel/cli": "^7.19.3",
    "@babel/core": "^7.19.6",
    "@babel/preset-env": "^7.19.4",
    "babel-loader": "^8.2.5",
    "webpack": "^5.74.0",
    "webpack-cli": "^4.10.0"
```

### ์ถ๊ฐ ํ์ผ

1. .babelrc
2. webpack.config.js => babel-loader ์ฐ๊ฒฐ

### ์ํ ๊ฒฐ๊ณผ

index.js - bold.js, italic.js ํ์ผ์ ๋ฒ๋คํ์ฌ dist/index.js ์์ฑ ๋ฐ ํธ๋์คํ์ผ์ ์ํด ํ์ดํ ํจ์ ์ญ์ 

subindex.js ํ์ผ์ ๋ฒ๋คํ์ฌ dist/subindex.js ์์ฑ ๋ฐ ํธ๋์คํ์ผ์ ์ํด ํ์ดํ ํจ์ ์ญ์ 

## ๐ง 2. onlyBabel

### package

```js
    "@babel/cli": "^7.19.3",
    "@babel/core": "^7.19.6",
    "@babel/preset-env": "^7.19.4"
```

### ์ถ๊ฐ ํ์ผ

1. .babelrc

### ์ํ ๊ฒฐ๊ณผ

index.js, bold.js, italic.js , subindex.js ํ์ผ๋ค์ด ๊ฐ๊ฐ ํธ๋์คํ์ผ์ ์ํด dist ํด๋์ ์์ฑ๋๊ณ  ํ์ดํํจ์๋ ๊ธฐ๋ณธํจ์๋ก ๋ณ๊ฒฝ

## ๐จ 3. onlyWebpack

### package

```js
     "webpack": "^5.74.0",
    "webpack-cli": "^4.10.0"
```

### ์ถ๊ฐ ํ์ผ

1. webpack.config.js

### ์ํ ๊ฒฐ๊ณผ

index.js, bold.js, italic.js , subindex.js ํ์ผ๋ค์ด webpack์ ์ํด ๋ฒ๋ค๋ง ๋  ํ์ผ๋ผ๋ฆฌ๋ ๋ฒ๋ค๋ง ๋๋ค.

index.js, bold.js, italic.js => dist/index.js

subindex.js => dist/subindex.js

(ํ์ดํํจ์๊ฐ ์ฌ๋ผ์ง๋ ํธ๋์คํ์ผ๋ง์ ์๋๋ค.)

## ๐ฉ 4. tsc

### package

```js
```

* global๋ก tsc ์กด์ฌ

### ์ญ์  ํ์ผ

1. webpack.config.js

### ์ํ ๊ฒฐ๊ณผ

index.js, bold.js, italic.js , subindex.js ํ์ผ๋ค์ด tsc์ ์ํด dist ํ์ผ์ ๊ฐ๊ฐ ์ปดํ์ผ๋์ด ๋ง๋ค์ด์ง๋ค. (webpack ๋ฒ๋ค๋ง์ ์๋๋๊น) 

๋์ , ๊ธฐ์กด์ ts์์ esmodule๊ณผ commonJs๋ฅผ ํผํฉํ ์ํ์์ ํต์ผ๋ js๋ก ๋ฐ๋๋ฉด์ dist/js ํ์ผ์ index.js ํ์ผ์ node์์ ์คํํ๋ฉด ์ ์์ ์ผ๋ก ์คํ๋๋ค. 

* 22-11-03 `esModuleInterop`๋ฅผ true๋ก ์ค์ ํด๋ commonJS์ ESModule์ ํฉํ ๊ฒ์ด ์๋ฌ๊ฐ ๋ฐ์ํ๊ธฐ๋ ํ๋ค. ํ์คํ ๊ฒ์ ์ ๋ถ ๋ค ESModule๋ก ๋ง๋ค๊ณ 
TS๋ฅผ JS๋ก ์ปดํ์ผ ํ๋ ๊ณผ์ ์์ ํ์์ ๋ฐ๋ผ commonJS ํน์ ES6 ํํ๋ก ์ปดํ์ผ์ ํ๋ฉด ๋์ง ์๋ ์ถ๋ค. (์ ์ด ํผํฉ๋ ๋ชจ๋ ์ฌ์ฉ์ ์ง์ํ๋๊ฒ ๋ซ์ง์์๊น์ถ๋ค.)

# CommonJS + ESModule์ ์คํ์ ํ๋ ๋ฐฉ๋ฒ
## 1. JS ํ์ผ์์๋ง ์๊ฐ - Webpack
index.js๋ commonJS ํํ์ bold.js์ esmodule ํํ์ italic.js๋ฅผ importํ๊ณ  ์๋ค. 
๊ธฐ๋ณธ์ ์ผ๋ก ํด๋น index.js๋ node์์ ์คํ์ด ๋ถ๊ฐ๋ฅํ๋ค. 
ํ์ง๋ง, Webpack์ ์ด์ฉํ์ฌ ๋ฒ๋ค๋ง + ์ปดํ์ผ์ ํตํด ๋ธ๋ผ์ฐ์ ์ node์์ ์คํ๊ฐ๋ฅํ ํ์ผ๋ก ๋ง๋ค์ด ์คํ์ํฌ ์ ์๋ค. 

[์คํ๊ฐ๋ฅ index.js](https://github.com/khw970421/WebpackAndBabel/blob/onlyWebpack/dist/index.js)
(ํด๋น ํ์ผ์ node.js ๋ฐ ๋ธ๋ผ์ฐ์ ์์ ์คํ๊ฐ๋ฅํ index.js ํ์ผ์ด๋ค.)

## 2. TS ํ์ผ์์๋ง ์๊ฐ - tsc
index.ts๋ commonJS ํํ์ bold.ts์ esmodule ํํ์ italic.ts๋ฅผ importํ๊ณ  ์๋ค. 
๊ธฐ๋ณธ์ ์ผ๋ก ํด๋น index.ts๋ node์์ ์คํ์ด ๋ถ๊ฐ๋ฅํ๋ค. ( ts-node๋ฅผ ์ด์ฉํด ts-node index.ts๋ฅผ ํ๋ฉด `__ is not a module.` ๊ด๋ จ ์๋ฌ ๋ฐ์ 
(๋ฌผ๋ก  ์ด๋ฅผ ์ํด์ tsconfig.json์ "esModuleInterop": true ๋ถ๋ถ์ ์ถ๊ฐํ์ฌ์ผํ๋ค. - https://www.typescriptlang.org/tsconfig#esModuleInterop)

### CommonJS ์ฝ๋๋ก ๋ง๋ค๊ธฐ
tsconfig.json์์ `"module": "commonjs",` ํํ๋ก ์ฒ๋ฆฌํ๋ฉฐ node์์ ์คํํ  ์ ์๋ ํ์ผ๋ค๋ก ๋ฐ๋๊ฒ ๋๋ค. 

[require์ฌ์ฉ](https://github.com/khw970421/WebpackAndBabel/blob/tsc/dist/commonJS/index.js)

### ESModule ์ฝ๋๋ก ๋ง๋ค๊ธฐ
tsconfig.json์์ `"module": "ES6"` ํํ๋ก ์ฒ๋ฆฌ commonJs ์ฝ๋๊ฐ ES6 ํํ๋ก ๋ฐ๋์ง๋ ์์๋ค. 

[์ฌ์ ํ ๋จ์์๋ CommonJS](https://github.com/khw970421/WebpackAndBabel/blob/tsc/dist/ES6/bold.js)


# ์ ๋ฆฌ
๋ด๊ฐ ์ดํดํ ๊ฒ์ผ๋ก ์ ๋ฆฌํ์๋ฉด node ํ๊ฒฝ์์ commonJS์ esModule์ด ํผํฉ๋ ์ฝ๋๋ ์คํ ๋ถ๊ฐ๋ฅํ๋ค. <br>
js์ ๊ฒฝ์ฐ ์ด๋ฅผ ํด๊ฒฐํ๊ธฐ ์ํด webpack์ ํตํด ๋ฒ๋ค๋ง + ์ปดํ์ผ๋ก node์ ๋ธ๋ผ์ฐ์ ์์ ์คํํ  ์ ์๋ ์ฝ๋๋ก ๋ง๋ค ์ ์๋ค. <br>

ts์ ๊ฒฝ์ฐ tsc๋ง์ผ๋ก ํผํฉ๋ ์ฝ๋์ tsconfig.json์ module ํํ๋ฅผ commonJs๋ก ํ๋ฉด esModule ์ฝ๋๋ฅผ commonjs ๋ง๋ค์ด node์์ ์คํ์ ๊ฐ๋ฅํ๋ค. <br>
ํ์ง๋ง, tsconfig.json์ module ํํ๋ฅผ es6๋ก ํด๋ commonJs ํํ์ ์ฝ๋๋ฅผ esModule ํํ๋ก ๋ฐ๋์ง๋ ์์๋ค. (๊ฒฐ๊ตญ ๋ธ๋ผ์ฐ์ ์์ ๋ชป ์คํํ์ง) <br>

์ฆ, commonJS์ esModule์ด ํผํฉ๋ ts๋ Webpack์ ์ด์ฉํด commonJs์ esModule์์ ๋์ํ  ์ ์๋ ์ฝ๋๋ก ๋ฒ๋ค๋ง + ์ปดํ์ผ์ ํ๋๊ฒ ๋ง์ง์์๊น ์๊ฐ์ด๋ ๋ค. <br>
`cjs-to-es6`์ ๊ฐ์ commonJS ์ฝ๋๋ฅผ es6๋ก ๋ฐ๊พธ๋ npm ํจํค์ง๋ ์กด์ฌํ๊ธฐ๋ํ๋ค. 

๊ฒฐ๊ตญ, import export๋ฅผ ์ฌ์ฉํ esModule์ ํ์์ ๋ฐ๋ผ jsํ์ผ์ด๋  tsํ์ผ์ด๋  Node์์ ๋์ํ๋ CommonJS ํํ๋ก ๋ฐ๊ฟ์๋ ์๊ณ  ์ ์ฉํ๋ค๋ ์๊ฐ์ด ๋ ๋ค. 
  

