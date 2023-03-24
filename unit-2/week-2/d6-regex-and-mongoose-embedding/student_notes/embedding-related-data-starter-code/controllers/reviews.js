const Movie = require('../models/movie');

module.exports = {
    create
};

// We need the reviews SCHEMA embedded within the Movie schema
async function create(req, res) {
    try {
        const movie = await Movie.findById(req.params.id);
        movie.reviews.push(req.body);

        const updatedMovie = await movie.save();

        res.redirect(`/movies/${updatedMovie._id}`);
    } catch(err) {
        console.error(err);
        res.status(500).send(err.message);
    }
}