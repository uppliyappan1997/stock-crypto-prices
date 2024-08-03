import { Request, Response } from 'express';
import Price from '../models/Price';

const getData = async (req: Request, res: Response) => {
  try {
    const { symbol } = req.query;
    const data = await Price.find({ symbol }).sort({ timestamp: -1 }).limit(20);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
};

export { getData };
