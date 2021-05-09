import { http } from "./http";
import "./websocket/client";

http.listen(3333, () => {
  console.log("Server on http://localhost:3333")
});
