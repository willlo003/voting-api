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
https://r6pa05op60.execute-api.ap-east-1.amazonaws.com/production/get-campaigns
<br>
method: get

### get-candidates
https://r6pa05op60.execute-api.ap-east-1.amazonaws.com/production/get-candidates/{id}
<br>
method: get

### get-results
https://r6pa05op60.execute-api.ap-east-1.amazonaws.com/production/get-result/{id}
<br>
method: get

### vote
https://r6pa05op60.execute-api.ap-east-1.amazonaws.com/production/vote
<br>
method: post
<br>
body: {
  "campaign_id": 1,
  "hkid": "a1234567",
  "voted_candidate_id": 1
}

## Run the API locally
#### The .env.* files have been provided for running the API locally.


### Installation
Clone the project to your local OS

``` bash
$ git clone https://github.com/willlo003/voting-api.git
```
#### cd to the project folder

``` bash
$ yarn install
```

### Create local db (make sure postgresql installed)

``` bash
$ yarn create-local-db
```

### Unit test

``` bash
$ yarn test
```

### Run locally

``` bash
$ yarn offline
```