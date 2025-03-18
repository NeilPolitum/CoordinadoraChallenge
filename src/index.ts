import express from 'express';
import routes from './routes';
import { setupSwagger } from './config/swagger';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', routes);

setupSwagger(app);

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

export default app;
