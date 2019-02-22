const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
    res.send('Things are working!');
  });

  const port = process.env.PORT || 9000;
server.listen(port, () => console.log(`\nrunning on ${port}\n`));