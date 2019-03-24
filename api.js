import express from 'express';
const sqlite = require('sqlite3');

const api = express.Router();

const db = new sqlite.Database('quoting.db')


api.get('/quotes', function(req, res) {
 // return searched author's quotes but not much time to implement
if(req.query.author) {
    db.all('SELECT * FROM quotes WHERE author = ?', [req.query.author], (err, rows) => {
      if(err) {
        res.send(err.message);
      }
      else {
        res.json(rows)
      }
    });
   
  }
  else {
    db.all('SELECT * FROM quotes', (err, rows) => {
      if(err) {
        res.send(err.message)
      }
      else {
        res.json(rows);
      }
    });
  }
});

// returns individual quote not being used now didn't implement frontend routing
api.get('/quotes/:id', function(req, res) {
  db.get('SELECT * FROM quotes WHERE id = ?', [req.params.id], (err, row) => {
    if(err) {
      res.send(err.message);
    }
    if(row===undefined) {
      res.send({});
    }
    else {
      res.json(row);
    }
  });
 
});


api.post('/quotes', (req, res) => {
  const {quote, image, author} = req.body
  
  db.run('INSERT INTO quotes(quote,author,image) VALUES (?, ?, ?)',
   [quote, author, image], (err) => {
    if(err) {
      console.log(err.message);
    }else {
      //could return just the added quote 
      db.get('SELECT * FROM quotes WHERE quote = ?',[quote], (err, row) => {
        if(err) {
          console.log(err)
        }else {
          res.json(row)
        }
      })
    }
  });
});

api.put('/quotes/:id', (req, res) => {
  const { id } = req.params;
  const { quote, author, image} = req.body;
  db.run('UPDATE quotes SET quote = ?, author = ?, image = ? WHERE id = ?',
  [quote, author, image ,id], (err, rows) => {
    if(err) {
      console.log(err);
    }else {
      db.all('SELECT * FROM quotes', (err, rows) => {
        if(err) {
          console.log(err)
        }else {
          res.json(rows)
        }
      })
    }
  })
})


api.delete('/quotes/:id', (req, res) => {
  const {id} = req.params;
  db.run('DELETE FROM quotes WHERE id = ?', id, (err) => {
    if(err) {
      console.log(err.message)
    }else {
      res.send(`quote with id:${id} removed`);
    }
  });
});


export default api;