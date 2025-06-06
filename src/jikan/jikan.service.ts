import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class JikanService {
  constructor(private readonly httpService: HttpService) {}

  async getAnime(id: number) {
    const anime = await firstValueFrom(
      this.httpService.get(`https://api.jikan.moe/v4/anime/${id}`)
    );
    const videos = await firstValueFrom(
      this.httpService.get(`https://api.jikan.moe/v4/anime/${id}/videos`)
    );

    const animeData = anime.data.data;
    const videoData = videos.data.data;

    animeData["pictures"] = videoData.episodes?.[0]?.images?.jpg?.image_url || '';

    return animeData;
  }

  async getTopAnime(limit: number) {
    const response = await firstValueFrom(
      this.httpService.get(`https://api.jikan.moe/v4/top/anime?limit=${limit}`)
    );
    return response.data;
  }
}
