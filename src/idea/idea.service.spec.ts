import { Test, TestingModule } from '@nestjs/testing';
import { IdeaService } from './idea.service';

describe('IdeaService', () => {
  let service: IdeaService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IdeaService],
    }).compile();
    service = module.get<IdeaService>(IdeaService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
