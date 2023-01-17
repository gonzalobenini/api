import express from 'express'
import tarjetasRoutes from './routes/tarjetas.routes.js'
import cors from 'cors'


const app = express();

app.use(cors({
    origin: 'http://localhost:4200'
}))

app.use(express.json());

app.use('/api',tarjetasRoutes); // para que los busque despues de la palabra api

app.use((req,res,next) => {
    res.status(404).json({
        message:"Endpoint not found"
    })
});

export default app;