import { Controller, Get, Param } from '@nestjs/common';
import { AnimeService } from './anime.service';

@Controller('anime')
export class AnimeController {
  constructor(private readonly animeService: AnimeService) {}

  @Get(':id/banner')
  getBanner(@Param('id') id: string) {
    return this.animeService.getAnimeBanner(Number(id));
  }

  @Get('trending')
  getTrending() {
    return this.animeService.getTrendingAnime();
  }

  @Get('upcoming')
  getUpcoming() {
    return this.animeService.getUpcomingAnime();
  }
}
