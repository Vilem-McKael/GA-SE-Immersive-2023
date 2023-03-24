var express = require('express');
var router = express.Router();

const token = process.env.GITHUB_TOKEN;
const ROOT_URL = "https://api.github.com";

/* GET home page. */
router.get('/', async function(req, res, next) {
  // Use Express's req.query object to 
  // access query parameters
  const username = req.query.username;
  // If this is not a "search",
  // just render the index view
  if (!username) return res.render('index', {userData: null});
  const options = {
    headers: {
      Authorization: `token ${token}`
    }
  }
  const userData = await fetch(`${ROOT_URL}/users/${username}`, options)
    // fetch() returned a promise that 
    // resolves to a response object
    .then(res => res.json())
    // To access the data received from the API,
    // we've called the response object's
    // .json() method which resolves to the data...
    .then(userData => {
      console.log(userData);
      res.render('index', { userData });
    });
});

module.exports = router;
