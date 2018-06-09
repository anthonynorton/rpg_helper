const keys = require('../../keys');

const currentEnvironment = typeof process.env.NODE_ENV === 'string' ?
  process.env.NODE_ENV : '';

const environments = {}

environments.staging = {
    db: {
        username: keys.username,
        password: keys.password,
        uri: keys.uri,
    },
};

environments.development = {
  
}