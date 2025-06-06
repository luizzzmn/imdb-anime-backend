import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { JikanService } from './jikan.service';
import { JikanController } from './jikan.controller';

@Module({
  imports: [HttpModule],
  controllers: [JikanController],
  providers: [JikanService],
})
export class JikanModule {}
