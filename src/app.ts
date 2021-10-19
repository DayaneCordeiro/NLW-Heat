import "dotenv/config";
import express from "express";

import { router } from "./routes";

const app = express();
app.use(express.json());

app.use(router);

// Route to github login
app.get("/github", (request, response) => {
  response.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
  );
});

// Route to callback function
app.get("/signin/callback", (request, response) => {
  const { code } = request.query;

  return response.json(code);
});

// Application will run on 4000 port
app.listen(4000, () => console.log(`🚀 Server is running on 4000 PORT`));
