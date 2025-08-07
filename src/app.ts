import express from 'express';
import productRoutes from './routes/productRoutes';
import cartRoutes from './routes/cartRoutes';

import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './docs/swagger';
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use('/api', productRoutes);
app.use('/api', cartRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
  console.log(`Swagger en http://localhost:${PORT}/api-docs`);
});

export default app;
