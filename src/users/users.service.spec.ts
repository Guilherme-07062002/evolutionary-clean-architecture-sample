import { UsersService } from './users.service';

const makeSut = () => {
  const service = new UsersService();
  return { service };
}

describe('UsersService', () => {
  it('should be defined', () => {
    const { service } = makeSut();
    expect(service).toBeDefined();
  });
});
