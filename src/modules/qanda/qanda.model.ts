import { Prop, Schema } from '@nestjs/mongoose';
import { EmbeddedDocument } from 'src/shared/mongoose/base.document';
import { DefaultSchemaOptions } from 'src/shared/mongoose/schema-option';

@Schema(DefaultSchemaOptions)
export class QAndADocument extends EmbeddedDocument {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  questionUrl: string;

  @Prop({ required: true })
  answerUrl: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  subject: string;
}
