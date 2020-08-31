const { router, get , post} = require('microrouter');

const index = (req, res) => JSON.stringify([]);

const addRecord = (req, res) => null;

const pages = (req, res) => {
    return JSON.stringify({
        query: req.query,
        params: req.params
    })
};

module.exports = router(
    get('/', index),
    post('/', addRecord),
    get('/pages/:page/*', pages)
);
