// normalize the paths : http://stackoverflow.com/questions/9756567/do-you-need-to-use-path-join-in-node-js
import * as path from "path";

// Importing Express
import express, { Application, Request, Response, NextFunction } from "express";

// Declaring port where server is going to run
const port = 5000;

// Initialization of app
const app: Application = express();

// Route of our request, in this case we send our public html file
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});

// Running Listen method
app.listen(port, () => console.log("Server running on port " + port));
