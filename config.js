module.exports = {
  port: process.env.PORT || 8080,
  db: {
    prod: 'mongodb://sohaibali:test1214@ds341837.mlab.com:41837/sohaibalidb',
    test: 'mongodb://localhost:27017/reddit_test',
    options: {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      reconnectTries: Number.MAX_VALUE,
      reconnectInterval: 500
    }
  },
  jwt: {
    secret: 'development_secret',
    expiry: '7d'
  }
};
