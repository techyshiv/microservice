import express from 'express';
import { APP_PORT, DB_URL } from './config';
import errorHandler from './middlewares/errorHandler';
import routes from './routes';
import mongoose from 'mongoose';
const app = express();

// Database Connection
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const DB = mongoose.connection;
DB.on('error', console.error.bind(console, 'connection error'));
DB.once('open', () => {
    console.log("Database Connected Successfully !!");
})

// Register all routes
app.use(express.json());
app.use('/api', routes);
app.use(errorHandler);
app.listen(APP_PORT, () => {
    console.log(`Listening on Port :${APP_PORT}`);
})