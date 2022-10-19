React vite 

yarn create vite
    react
    js

// Para instalar las dependencias
yarn
// Iniciar app
yarn dev
// proptypes
yarn add prop-types

// para hacer las pruebas
//https://jestjs.io/docs/getting-started
yarn add -D jest
yarn add -D @types/jest
yarn add --dev babel-jest @babel/core @babel/preset-env

//https://testing-library.com/docs/react-testing-library/intro
yarn add --dev @testing-library/react
yarn -D add jest-environment-jsdom
yarn -D add @babel/preset-react
./babel.config.json
./jest.config.json

°. Instalaciones:
```
yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react 
yarn add --dev @testing-library/react @types/jest jest-environment-jsdom
```

°. Crear la configuración de babel __babel.config.js__
```
{ "presets": [ 
    [ "@babel/preset-env", { "targets": { "node": "current" } } ] ,
    [ "@babel/preset-react", { "runtime": "automatic" } ] 
] }
```
°. Crear la configuración de babel __jest.config.js__
```
{
    "testEnvironment":"jest-environment-jsdom"
}
```

[React: De cero a experto ( Hooks y MERN )](https://www.udemy.com/course/react-cero-experto/)