/**
 * Created by Bartolo on 16/09/2016.
 */

var auth = require('./auth');

module.exports = function (app) {
    app.get('/partials/*', function (req, res) {
        res.render('../../public/app/' + req.params[0]);
    });

    app.post('/login', auth.authenticate);

    app.get('*', function (req, res) {
        res.render('index');
    });
};