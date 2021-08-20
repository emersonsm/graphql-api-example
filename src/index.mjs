import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import apollo from './apollo.mjs';

const app = express();
const PORT = 9000;

apollo(app);

app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
export default app.listen((PORT), () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
