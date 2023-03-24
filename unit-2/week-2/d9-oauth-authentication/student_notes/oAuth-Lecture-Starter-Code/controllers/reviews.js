const Movie = require('../models/movie');

module.exports = {
  create,
  delete: deleteReview
};

async function create(req, res) {
  try {
    const movie = await Movie.findById(req.params.id);

    // Add the user-centric info to req.body (the new review)
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;

    // Push the subdoc for the review
    movie.reviews.push(req.body);
    // Always save the top-level document (not subdocs)
    await movie.save();
    res.redirect(`/movies/${movie._id}`);
  } catch(err) {
    res.redirect(`/movies`);
  }
}

function deleteReview(req, res, next) {
  // Note the cool "dot" syntax to query on the property of a subdoc
  Movie.findOne({'reviews._id': req.params.id, 'reviews.user': req.user._id}).then(function(movie) {
    // Rogue user!
    if (!movie) return res.redirect('/movies');
    // Remove the review using the remove method available on Mongoose arrays
    movie.reviews.remove(req.params.id);
    // Save the updated movie
    movie.save().then(function() {
      // Redirect back to the movie's show view
      res.redirect(`/movies/${movie._id}`);
    }).catch(function(err) {
      // Let Express display an error
      return next(err);
      // res.redirect(`/movies/${movie._id}`);
    });
  });
}