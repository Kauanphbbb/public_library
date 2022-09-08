import { v4 as uuid } from 'uuid';

export class Book {
  id: string;
  title: string;
  author: string;

  constructor(title: string, author: string, id?: string) {
    this.id = id || uuid();
    this.title = title;
    this.author = author;
  }
}
