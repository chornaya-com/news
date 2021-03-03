# Quiz Game
[![CircleCI](https://circleci.com/gh/chornaya-com/news/tree/master.svg?style=svg&circle-token=63f6f27e841f7eff22bbd348eaee6daf742f2c66)](https://circleci.com/gh/chornaya-com/news/tree/master)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)]()

The latest news about Apple from all over the world. This web app bases on News API.
Implemented with React (incl. React Context Hook), Firebase and Circle CI integration, stylized with CSS.

[**Live demo**](https://news-apple.web.app/)

![Preview](https://user-images.githubusercontent.com/61564546/109834150-ced55680-7c39-11eb-9e6d-ab7fd5574891.png)
## Features
- [x] firebase setup
- [x] circle ci setup
- [x] axios for fetching data
- [ ] react router to switch pages

## How To
### Install Dependencies
```
yarn install
```
### Development
to start development server run:
```
yarn start
```
### Tests
to run unit tests execute:
```
yarn test
```
### Deployment
- create production build:
```
yarn build
```
- deploy to firebase:
```
yarn deploy
```