import { Request, Response } from 'express';
import { productsData } from '../data/productsData';

export const getProducts = (_req: Request, res: Response) => {
  res.json(productsData);
};
