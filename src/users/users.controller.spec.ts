import { UsersController } from './users.controller';

const makeSut = () => {
  const service = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn()
  };
  const controller = new UsersController(service as any);
  return { service, controller };
};

describe('testing users controller', () => {
  it('should be defined', () => {
    const { controller } = makeSut();
    expect(controller).toBeDefined();
  });
});
