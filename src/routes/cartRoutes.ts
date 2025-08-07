import { Router } from 'express';
import { addToCart, getCart } from '../controllers/cartController';

const router = Router();

/**
 * @swagger
 * /api/cart:
 *   post:
 *     summary: Agrega un producto al carrito
 *     tags: [Carrito]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Producto agregado
 */
router.post('/cart', addToCart);

/**
 * @swagger
 * /api/cart:
 *   get:
 *     summary: Obtiene productos en el carrito
 *     tags: [Carrito]
 *     responses:
 *       200:
 *         description: Lista del carrito
 */
router.get('/cart', getCart);

export default router;
