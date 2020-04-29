# Bank account kata

The purpose of this kata is to apply several concepts of craftmanship
* clean code : having a well structure project with explicit variables/method names
* tests : 
    * having a TDD approach with micro-commit
    * implement BDD

# [Statement](https://gist.github.com/abachar/d20bdcd07dac589feef8ef21b487648c)

Think of your personal bank account experience When in doubt, go for the simplest solution

# Requirements
- Deposit and Withdrawal
- Account statement (date, amount, balance)
- Statement printing
 
# User Stories
##### US 1:
**In order to** save money  
**As a** bank client  
**I want to** make a deposit in my account  
 
##### US 2: 
**In order to** retrieve some or all of my savings  
**As a** bank client  
**I want to** make a withdrawal from my account  
 
##### US 3: 
**In order to** check my operations  
**As a** bank client  
**I want to** see the history (operation, date, amount, balance)  of my operations  

# Implementation

## Stack
In order to realize this kata, I've decided to create a monorepo with the following stack:
* server : nodejs, typescript
* client : react, typescript
* database : eventstore
* unit tests : jest
* behavioral tests: cucumberjs + chai
* build : docker + travis

## Project structure

```
    .
    ├── server              # REST api
    |   └── README.md
    ├── webapp              # SPA
    |   └── README.md
    ├── tests               # contains bdd
    |   └── README.md
    ├── .travis-ci.yml
    ├── api.yml             # open api specification
    ├── docker-compose.yml
    ├── package.json
    └── README.md
```

# Run

**Prerequisites:**  
In order to run this project, you have to install the following
* NodeJS LTS
* NPM & Yarn
* docker & docker-compose

```shell
docker-compose up
```

