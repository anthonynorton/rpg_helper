const noteRoutes = require('./note_routes');

module.exports = (app, db) => {
    console.log('./index.js');
    noteRoutes(app, db);
}