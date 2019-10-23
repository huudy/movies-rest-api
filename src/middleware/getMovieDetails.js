const axios = require("axios");

const getMovieDetails = async (req, res, next) => {
    try {
        const {
            title
        } = req.body
        const formattedTittle = title.split(' ').join('+')
        let url = `https://www.omdbapi.com/?t=${formattedTittle}&apikey=${process.env.OMDB_API_KEY}`
        const response = await axios.get(url);
        const data = response.data;
        req.body = {
            ...data
        }
        if (data)
            next()
    } catch (e) {
        res.status(500).send(e);

    }
}

module.exports = getMovieDetails