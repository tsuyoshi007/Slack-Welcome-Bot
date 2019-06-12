# Slack-Welcome-Bot

  A simple slack-welcome-bot and you can edit the welcome message

## Getting Started


### Prerequisites


**Note**: SLACK_TOKEN will be passed into the function as a [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

You also need :
  -**@slack/rtm-api**
  -**dotEnv**


### Installation

```bash
npm install
```

## Running the tests

```bash
node bot.js
```


### To edit message

```
!msg your message
```

In your message must include **!user** so that the name of new user will be replaced to it.


## And coding style tests

```bash
semistandard --fix
```
[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square)](https://github.com/Flet/semistandard)

## Built With

* [NodeJS](https://nodejs.org/en/)
* [Slack/rtm-api](https://www.npmjs.com/package/@slack/rtm-api)

## Authors

* **Hun Vikran** 
