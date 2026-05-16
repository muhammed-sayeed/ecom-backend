import dotenv from 'dotenv';
dotenv.config();

import logger from './shared/logger/logger.js'

import app from './app.js';
import { env } from './configs/env.config.js';

const PORT = env.PORT || 5000;

app.listen(PORT, ()=>{
    logger.info(`Server running on port ${PORT}`);
})