const ObjectId = require('mongodb').ObjectId

module.exports = (app, db) => {
  app.get('/notes', async (req, res) => {
    const notesCollection = db.collection('notes');
    const notes = await notesCollection.find(async (err, result) => await result.toArray())
    res.send(notes)
  })
  // Post a note
  app.post('/notes', (req, res) => {
    const notes = db.collection('notes')
    const note = { body: req.body.body, title: req.body.title }
    notes.insert(note, (err, result) => {
      if (!err) {
        res.send(result.ops[0])
      } else {
        res.send({ msg: 'An error has occured.', error: err })
      }
    })
  })

  app.get('/notes/:id', (req, res) => {
    const id = req.params.id
    const details = { _id: new ObjectId(id) }
    const notes = db.collection('notes')
    notes.findOne(details, (err, item) => {
      if (!err) {
        res.send(item)
      } else {
        res.send({ msg: 'An error has occured.', error: err })
      }
    })
  })

  app.put('/notes/:id', (req, res) => {
    const id = req.params.id
    const note = { body: req.body.body, title: req.body.title }
    const details = { _id: new ObjectId(id) }
    const notes = db.collection('notes')
    console.log(note);
    notes.update(details, note, (err, result) => {
      if (!err) {
        res.send(Object.assign({}, note, { id }))
      } else {
        res.send({ msg: 'An error has occured.', error: err })
      }
    })
  })

  app.delete('/notes/:id', (req, res) => {
    const id = req.params.id
    const details = { _id: new ObjectId(id) }
    const notes = db.collection('notes')
    notes.remove(details, (err, item) => {
      if (!err) {
        res.send({ msg: `Note with id ${id} was deleted.`, deleted: [id]})
      } else {
        res.send({ msg: 'An error has occured.', error: err })
      }
    })
  })
}
