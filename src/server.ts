import dotenv from 'dotenv';
dotenv.config();

import app from './app.js';
import { env } from './configs/env.config.js';

const PORT = env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})