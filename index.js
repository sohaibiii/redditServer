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
  connect(config.db.prod);

  mongoose.connection.on('error', console.log);
  console.log('success');
});

module.exports = { connect };
