import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('API de gestión de envíos funcionando correctamente');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});