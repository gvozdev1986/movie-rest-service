const { json } = require("micro");
const { router, get, post } = require("microrouter");
const { Movie } = require("./db");

const index = async () => {
  let rows = await Movie.findAll();
  return JSON.stringify(rows);
};

const addRecord = async (req) => {
  const { text } = await json(req);
  await Movie.create({
    text: text
  });
};

const pages = (req, res) => {
  return JSON.stringify({
    query: req.query,
    params: req.params
  });
};

module.exports = router(
  get("/", index),
  get("/pages/:page/*", pages),
  post("/", addRecord),
);
