# Quero Ler
Aplicativo de controle de livros e empréstimos integrado com APIs externas utilizando Ionic Angular.

## Pré-requisitos
* Android Studio
* [Ionic](https://ionicframework.com/docs/intro/cli)
* [Angular](https://angular.io/guide/setup-local) - Atualmente versão 8.
* [NPM](https://www.npmjs.com/)

## Rodando o projeto
Para executar o projeto pela primeira vez é necessário antes rodar os seguintes comandos:

```
npm install
npm run add-android
npm run update
```

Após isso, para instalar o projeto no app basta rodar `npm run ide`. Caso deseje utilizar o *live refresh*: `ionic capacitor run android -l --address=COMPUTER_LOCAL_IP`. 

É possível inspecionar os elementos e acompanhar o console do que está sendo executado no celular acessando, no Google Chrome, chrome://inspect/#devices.
