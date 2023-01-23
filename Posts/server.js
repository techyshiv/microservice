import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';
import { APP_PORT, DB_URL } from './config';
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
app.listen(APP_PORT, () => {
    console.log(`Listening on Port :${APP_PORT}`);
})