# Voting-Web

## Main Feature

- **Skill set**
  - NodeJs
  - Javascript
  - AWS Lambda
  - Postgresql
  - Jest

## APIs 

### get-campaigns 
https://u64cgtx0tb.execute-api.ap-east-1.amazonaws.com/dev/get-cryptos
method: get

### get-candidates
https://u64cgtx0tb.execute-api.ap-east-1.amazonaws.com/dev/get-cryptos
method: get

### get-results
https://u64cgtx0tb.execute-api.ap-east-1.amazonaws.com/dev/get-cryptos
method: get

### vote
https://u64cgtx0tb.execute-api.ap-east-1.amazonaws.com/dev/get-cryptos
method: post
body: {
  "campaign_id": 1,
  "hkid": "a1234567",
  "voted_candidate_id": 1
}

## Run the API locally

### Installation
Clone the project to your local OS

``` bash
$ git clone https://github.com/willlo003/stock-crypto.git
```

``` bash
$ yarn install
```

### Create local db (make sure postgresql installed)

``` bash
$ CREATE DATABASE voting;
```


### Unit test

``` bash
$ yarn test
```

### Run locally

``` bash
$ sls offline
```