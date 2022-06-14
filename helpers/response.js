const message = require('../message-code.json');

const handler = (statusCode, success, messageCode, data, payload) => {
  return {
    statusCode: statusCode,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Methods": "*",
    },
    body: JSON.stringify({
      success: success,
      ...{message_code: messageCode},
      ...(messageCode ? { message: message[messageCode] } : ""),
      ...(data ? { data: data } : ""),
      ...(payload ? { payload: payload } : ""),
    }),
  };
};

module.exports.handler = handler;
