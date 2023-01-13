// const express = require('express');
// const app = express();
// const port = 6666;

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });

const fs = require('fs');
fs.readFile('segg.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  // DO this if no error
  let counter = 0;
  let arr = data.split('') ;
  arr.map((item) => {
    if (item === '(') {
      counter++;
    } else if (item === ')') {
      counter--;
    }
  })
  console.log(counter)
})