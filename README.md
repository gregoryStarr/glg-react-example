# GLG React Example

## Instructions
Install yarn 
```
brew install yarn
```


Then...
```
yarn && yarn start
```

## Overview
An example project using the following
- ReactJS : v16.7.0.alpha.0 (Backward compatible to stable v16.6.0)
https://github.com/reactjs/rfcs/pull/68
    - ErrorBoundries
    - Fragment
    - Suspense
- Webpack 4
- GLG Theme : https://github.com/glg/ui-theme
    - customized semantic-ui stylesheet
    - purifycss webpack plugin for css optimization: https://github.com/purifycss/purifycss
    - treeshaking for js optimizations
    - code splitting using dynamic imports
- React Hooks Proposal : https://reactjs.org/docs/hooks-intro.html
    - useState
    - useEffects
- Mob-x State Management

## Optimized Prod Builds
running 'yarn run build' will optimize both the css and js assets based on what is used in your code, and shake out what's unused.
