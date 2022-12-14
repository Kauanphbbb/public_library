import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBookDto } from './dtos/create-book.dto';
import { UpdateBookDto } from './dtos/update-book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly booksRepository: Repository<Book>,
  ) {}

  findAll() {
    return this.booksRepository.find();
  }

  create(createBookDto: CreateBookDto) {
    const book = this.booksRepository.create(createBookDto);
    return this.booksRepository.save(book);
  }

  findOne(id: string) {
    const book = this.booksRepository.findOneBy({ id });
    return book;
  }

  delete(id: string) {
    return this.booksRepository.delete(id);
  }

  update({ id, updateBookDto }: { id: string; updateBookDto: UpdateBookDto }) {
    return this.booksRepository.update(id, updateBookDto);
  }
}
