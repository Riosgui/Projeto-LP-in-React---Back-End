module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: env('DATABASE_HOST', 'cluster0-shard-00-01.z38wt.mongodb.net:27017/Cluster0?ssl=true&authSource=admin&retryWrites=true&w=majority&&slaveOk=true&replicaSet=readPreference=secondaryPreferred"'),
        srv: env.bool('DATABASE_SRV', false),
        port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME', 'projeto03'),
        username: env('DATABASE_USERNAME', 'riosgui'),
        password: env('DATABASE_PASSWORD', '24866282gui'),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        ssl: env.bool('DATABASE_SSL', true),
      },
    },
  },
});
