import * as dotenv from 'dotenv'
dotenv.config()

export const config = {
    port: process.env.PORT,
    jwtSecret: process.env.JWT_SECRET,
    db: {
        development: {
            username: process.env.DB_DEV_USERNAME,
            password: process.env.DB_DEV_PASSWORD,
            database: process.env.DB_DEV_DATABASE,
            dialect: 'postgres',
        },
        test: {
            username: process.env.DB_TEST_USERNAME,
            password: process.env.DB_TEST_PASSWORD,
            database: process.env.DB_TEST_DATABASE,
            dialect: 'postgres',
        },
        production: {
            url: process.env.DATABASE_URL
        },
    },
};