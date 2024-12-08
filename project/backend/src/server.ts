import express, {Request, Response} from 'express';
import api from './routes/routes'
import createHttpError from 'http-errors';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/', api);

app.get('/', (req: Request, res: Response) => {
    // res.sendFile(path.join(__dirname, '../frontend/build/index.html')); // path might need to change
    res.send('Hello from ts app')
});

app.listen(port, () => {
    console.log(`App server listening on port ${port}!`)
});
