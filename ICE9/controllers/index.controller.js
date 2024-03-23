/**
 * Render home.pug view
 * @param {*} req 
 * @param {*} res 
 */
function homeView(req, res) {
  // Render home.pug in views/pages
  res.render('pages/home', {
      title: "Home Page",
      message: "Welcome to the Home Page."
  });
}

/**
* Render about.pug view
* @param {*} req 
* @param {*} res 
*/
function aboutView(req, res) {
  // Render about.pug in views/pages
  res.render('pages/about', {
      title: "About Page",
      message: "Welcome to the About Page."
  });
}

// Export the controller functions
module.exports = {
  homeView,
  aboutView
};
