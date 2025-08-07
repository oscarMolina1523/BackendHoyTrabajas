import { Request, Response } from 'express';
import { productsData } from '../data/productsData';
import Product from '../models/Product';

let cart: Product[] = [];

export const addToCart = (req: Request, res: Response) => {
  const { productId } = req.body;

  const product = productsData.find(p => p.id === productId);
  if (!product) {
    return res.status(404).json({ message: 'Producto no encontrado' });
  }

  cart.push(product);
  res.json({ message: 'Producto agregado al carrito', cart });
};

export const getCart = (_req: Request, res: Response) => {
  res.json(cart);
};
