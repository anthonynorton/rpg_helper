module.exports = (app, db) => {
    console.log('./note_routes.js');
    app.post('/notes', (req, res) => {
        console.log(req.body)
        res.send('note_routes POST')
    })
}