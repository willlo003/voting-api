# Voting-API

## Main Feature

- **Skill set**
  - NodeJs
  - Javascript
  - AWS Lambda
  - RDS Postgresql 
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

### 1, Installation
Clone the project to your local OS

``` bash
$ git clone https://github.com/willlo003/voting-api.git
```

#### 2, cd to the project folder

``` bash
$ yarn install
```

### 3, Create .env file

PG_HOST=127.0.0.1
<br>
PG_PORT=5432
<br>
PG_USER=postgres
<br>
PG_PASSWORD={{your_postgres_password}}
<br>
PG_DATABASE=postgres

### 4, Create local db (make sure postgresql installed)

``` bash
$ yarn create-local-db
```

### 5, Unit test

``` bash
$ yarn test
```

### 6, Run locally

``` bash
$ yarn offline
```

## High traffic and scalable architecture

### Lambda Function
* Increase ram size to increase execution time with similar cost
* Automatic scalability

### RDS
* Easy to scale up
* Read replica
* High availability
* Mutli-zone 
* RDS proxy

