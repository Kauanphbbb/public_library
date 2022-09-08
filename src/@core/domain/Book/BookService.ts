import { Book } from './Book';
import { BookRepo } from './BookRepo';

export class BookService {
  constructor(private readonly bookRepo: BookRepo) {}

  async findAll(): Promise<Book[]> {
    return this.bookRepo.findAll();
  }

  async findById(id: string): Promise<Book> {
    return this.bookRepo.findById(id);
  }

  async create(book: Book): Promise<Book> {
    return this.bookRepo.create(book);
  }

  async update(book: Book): Promise<Book> {
    return this.bookRepo.update(book);
  }

  async delete(id: string): Promise<void> {
    return this.bookRepo.delete(id);
  }
}
