import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AnimeService {
  private readonly jikanUrl = 'https://api.jikan.moe/v4';

  constructor(private readonly httpService: HttpService) {}

  async getAnimeBanner(id: number) {
    const { data } = await lastValueFrom(
      this.httpService.get(`${this.jikanUrl}/anime/${id}/pictures`)
    );
    const banner = data.data?.find(pic => pic.jpg.image_url?.includes('.jpg'));
    return banner?.jpg?.large_image_url || null;
  }

  async getTrendingAnime() {
    const { data } = await lastValueFrom(
      this.httpService.get(`${this.jikanUrl}/top/anime?filter=bypopularity`)
    );
    return data;
  }

  async getUpcomingAnime() {
    const { data } = await lastValueFrom(
      this.httpService.get(`${this.jikanUrl}/anime?status=upcoming&order_by=start_date&sort=asc&limit=10`)
    );
    return data;
  }
}
