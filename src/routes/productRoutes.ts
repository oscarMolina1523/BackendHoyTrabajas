import { Router } from 'express';
import { getProducts } from '../controllers/productController';

const router = Router();

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Obtener lista de productos
 *     tags: [Productos]
 *     responses:
 *       200:
 *         description: Lista de productos
 */
router.get('/products', getProducts);

export default router;
