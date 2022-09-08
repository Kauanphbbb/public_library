import { Book } from './Book';

export interface BookRepo {
  findAll(): Promise<Book[]>;
  findById(id: string): Promise<Book>;
  create(book: Book): Promise<Book>;
  update(book: Book): Promise<Book>;
  delete(id: string): Promise<void>;
}
