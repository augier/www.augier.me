module.exports = function (app) {
	var index = function(req, res){
	  app.render('index', function(err, html){
			res.render('template', {main: html});
		});
	};

	/*
	 * GET home page.
	 */
	app.get('/', index);
	
}