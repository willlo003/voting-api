# Currency-Exchange-App

## Main Feature

- **Skill set**
  - NodeJs
  - Javascript
  - AWS Lambda
  - AWS CodeBuild (CI/CD)
  - Jest

## API - Get-cryptos

### End Point

https://u64cgtx0tb.execute-api.ap-east-1.amazonaws.com/dev/get-cryptos

### Query Parameters

exchange: string - to change the displaying currency 

Example:
https://u64cgtx0tb.execute-api.ap-east-1.amazonaws.com/dev/get-cryptos?exchange=JPY

### Run the API locally

#### Installation

Clone the project to your local OS

``` bash
$ git clone https://github.com/willlo003/stock-crypto.git
```

Install the packages

``` bash
$ yarn install
```

Unit test

``` bash
$ yarn test
```

Run the project locally

``` bash
$ sls offline
```

## Error Message

2001 - Success

4221 - Wrong Currency Code

5001 - Internal server error

## CI/CD - using AWS Codebuild to achieve CI/CD pipeline

### pre_build

- unit test to ensure the result

### build

- zip the repo into the zip file

### post_build

- update the lambda function

