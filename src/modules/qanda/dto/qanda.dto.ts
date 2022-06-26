import {
  ApiProperty,
  ApiPropertyOptional,
} from '@nestjs/swagger/dist/decorators';
import { IsNotEmpty, IsString, IsUrl, IsEnum } from 'class-validator';
import { IamSubject } from '../types';

export class CreateQAndADto {
  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsUrl()
  questionUrl: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsUrl()
  answerUrl: string;

  @ApiPropertyOptional({ type: String })
  @IsNotEmpty()
  @IsString()
  category: string;

  @ApiPropertyOptional({ enum: IamSubject })
  @IsNotEmpty()
  @IsEnum(IamSubject)
  subject: string;
}
