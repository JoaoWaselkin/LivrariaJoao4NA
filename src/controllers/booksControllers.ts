import { Request, Response } from 'express';
import { booksService } from '../services/booksService';

const booksService = new booksService();

export const getBooks = async (req: Request, res: Response) => {
  try {
    const users = await booksService.listUsers();
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
};

export const addbooks = async (req: Request, res: Response) => {
  const { title, subtitle, price } = req.body;

  try {
    const books = await userService.createUser(title, subtitle,        price);
    res.status(201).json(books);
  } catch (err) {    
    res.status(400).json({ error: err });  
  }
};
