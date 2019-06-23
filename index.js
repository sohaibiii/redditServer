const app = require('./app');
const mongoose = require('mongoose');
const config = require('./config');

const connect = url => {
  return mongoose.connect(
    url,
    config.db.options
  );
};

app.listen(config.port, () => {
  process.env.NODE_ENV === 'production'
    ? connect(
        'mongodb://sohaibali:test1214@ds341837.mlab.com:41837/sohaibalidb'
      )
    : connect(config.db.prod);

  mongoose.connection.on('error', console.log);
  console.log('success');
});

module.exports = { connect };
