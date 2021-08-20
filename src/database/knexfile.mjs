const knexConfig = {
    client: 'mysql',
    debug: 'knex*',
    connection: {
        host: '127.0.0.1',
        database: 'root',
        user: 'root',
        password: '123456',
    },
    migrations: {
        tableName: 'migrations',
        directory: './migrations',
    },
    seeds: {
        directory: './seeds',
    },
};

export const { client, connection, migrations, seeds } = knexConfig;
