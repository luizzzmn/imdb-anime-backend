import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AnimeDocument = Anime & Document;

@Schema()
export class Anime {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop()
  rating: number;

  @Prop()
  episodes: number;
}

export const AnimeSchema = SchemaFactory.createForClass(Anime);
