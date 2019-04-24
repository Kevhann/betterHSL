if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}

let WSPORT = process.env.REACT_APP_WEBSOCKET_PORT
let HTTPPORT = process.env.REACT_APP_HTTP_PORT

module.exports = {
  WSPORT,
  HTTPPORT
}
