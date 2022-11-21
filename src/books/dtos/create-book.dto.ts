import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty({ message: 'Title is required' })
  readonly title: string;

  @IsString()
  @IsNotEmpty({ message: 'Author is required' })
  readonly author: string;

  @IsString()
  @IsNotEmpty({ message: 'Description is required' })
  readonly description: string;
}
