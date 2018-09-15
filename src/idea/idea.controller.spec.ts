import { Test, TestingModule } from '@nestjs/testing';
import { IdeaController } from './idea.controller';

describe('Idea Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [IdeaController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: IdeaController = module.get<IdeaController>(IdeaController);
    expect(controller).toBeDefined();
  });
});
