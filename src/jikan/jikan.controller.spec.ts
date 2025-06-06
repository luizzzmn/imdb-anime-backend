import { Test, TestingModule } from '@nestjs/testing';
import { JikanController } from './jikan.controller';

describe('JikanController', () => {
  let controller: JikanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JikanController],
    }).compile();

    controller = module.get<JikanController>(JikanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
