/**
 * Build NextJS config
 */
const dotenv = require('dotenv');
dotenv.config();

const config = {
    serverRuntimeConfig: {
    },
    publicRuntimeConfig: {
        API_URL: process.env.API_URL
    },
};

/*
 * Export with CSS webpack configuration
 */
module.exports = config;
