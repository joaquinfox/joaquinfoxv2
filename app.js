const express = require('express');
const PORT = process.env.PORT;

express()
  .set('view engine', 'ejs')
  .use(express.static('public'))
  .get('/', (req, res) => {
    res.render('index');
  })
  .get('/about', (req, res) => {
    res.render('about');
  })
  .get('/tech', (req, res) => {
    res.render('tech');
  })
  .listen(PORT || 3000, () => {
    console.log(`Listening on ${PORT || 3000}`);
  });