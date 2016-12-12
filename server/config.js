const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://192.168.5.53:27017/mern-starter',
  port: process.env.PORT || 8000,
};

export default config;
