import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dtos/create-book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {
  private books: Book[] = [
    {
      id: '1',
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
    },
  ];

  findAll(): Book[] {
    return this.books;
  }

  findOne(id: string): Book {
    return this.books.find((book) => book.id === id);
  }

  create(book: CreateBookDto) {
    this.books.push(book);
  }

  update(id: string, changes: Partial<Book>) {
    const book = this.findOne(id);
    if (book) {
      Object.assign(book, changes);
    }
  }

  remove(id: string) {
    this.books = this.books.filter((book) => book.id !== id);
  }
}
