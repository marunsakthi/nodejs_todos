const express = require("express");

const todoRouter = require("./routes/todos/todos.router");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.use("/todos", todoRouter);

app.use("/", (req, res) => {
  return res.status(200).send("Hello Todos");
});

app.listen(PORT,() => {
    console.log(`Listening on port ${PORT}...`)
})
