import express from 'express';
import bodyParser from 'body-parser';
import movieRouter from './router/movieRouter.js';
import { connectionPool } from './conn.js';

const PORT = null;
const URL = '127.0.0.1';

const app = express();

app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type")
})

connectionPool.once("open",()=>{
    app.use(movieRouter)

    const server = app.listen(PORT, ()=>{
        const address = server.address();
        console.log(`Server running at ${URL} and on port ${address.port}`);
    });
});

connectionPool.on("error", (err) => {
    console.error("Failed to connect to the database", err);
    process.exit(1);
});
