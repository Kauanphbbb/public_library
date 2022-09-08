import { Controller, Get } from '@nestjs/common';

@Controller('books')
export class BooksController {
  @Get()
  findAll(): string {
    return 'This action returns all books';
  }
}
