const { json } = require("micro");
const { router, get, post } = require("microrouter");
const { Movie } = require("./db");

const index = async () => {
  let rows = await Movie.findAll();
  return JSON.stringify(rows);
};

const movieId = async (req) => {
  const { id } = await json(req);
  let movieById = await Movie.findByPk(id);
  return JSON.stringify(movieById);
};

const addRecord = async (req) => {
  const { id } = await json(id);
  const { text } = await json(req);
  await Movie.create({
    id: id,
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
  get('/api/movie?id=', movieId),
  get('/', index),
  get('/pages/:page/*', pages),
  post('/', addRecord),
);
