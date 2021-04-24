if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

export const WSPORT = process.env.REACT_APP_WEBSOCKET_PORT ?? "";
export let PORT = process.env.REACT_APP_HTTP_PORT;

if (process.env.NODE_ENV === "production") {
  PORT = process.env.PORT;
}
