import { env, app } from "@server/config";

app.listen(env.port, () => {
  console.log("App running");
});
