import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import prisma from './prisma/client.js'

const app = express();


app.use(cors());
app.use(helmet());
app.use(express.json());

app.get('/health',(_, res)=>{
   
    res.json({
        success: true,
        messge: 'Server running'
    })
});

app.get('/test', async (_, res) => {
  const users = await prisma.user.findMany();

  res.json({
    success: true,
    data: users
  });
});

export default app;