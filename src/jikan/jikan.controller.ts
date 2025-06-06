import { Controller, Get, Param, Query } from '@nestjs/common';
import { JikanService } from './jikan.service';

@Controller('jikan')
export class JikanController {
  constructor(private readonly jikanService: JikanService) {}

  @Get('anime/:id')
  getAnime(@Param('id') id: number) {
    return this.jikanService.getAnime(id);
  }

  @Get('top')
  getTopAnime(@Query('limit') limit = 10) {
    return this.jikanService.getTopAnime(limit);
  }
}
