import { Test, TestingModule } from '@nestjs/testing';
import { ProfileService } from './profile.service';

describe('ProfileService', () => {
  let service: ProfileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfileService],
    }).compile();

    service = module.get<ProfileService>(ProfileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // testes unitários do get da página de profile

  it('Should get one profile', () => {
    expect(service.findOne(1)).toEqual({
      id: 1,
      name: 'sofia',
      ocupation: 'dev junior',
      email: 'sofia.pimazzoni@dell.com',
      linkedin: 'link',
      contact: '+55 11 99999-9999',
      country: 'Brazil',
      state: 'São Paulo',
      city: 'São Paulo',
      hardskills: ['python'],
      softskills: ['comunication'],
      otherskills: ['javascript'],
    });
  });

  it('Should show an error when trying to give a wrong id', () => {
    expect(service.findOne('sofia')).toEqual('this id doesnt exist');
  });

  // testes unitários do update da página profile

  it('Should update one profile', () => {
    let newProfileData = {
      city: 'Barueri',
      hardskills: ['python', 'java'],
      softskills: ['comunication', 'scrum'],
      otherskills: ['javascript', 'nodejs'],
    }

    expect(service.update(1, newProfileData)).toEqual({
      id: 1,
      name: 'sofia',
      ocupation: 'dev junior',
      email: 'sofia.pimazzoni@dell.com',
      linkedin: 'link',
      contact: '+55 11 99999-9999',
      country: 'Brazil',
      state: 'São Paulo',
      city: 'Barueri',
      hardskills: ['python', 'java'],
      softskills: ['comunication', 'scrum'],
      otherskills: ['javascript', 'nodejs'],
    });
  });

  it('Should show an error when trying to update something in the wrong format', () => {
    let newProfileData = {
      contact: 'sofia',
    }

    expect(service.update(1, newProfileData)).toEqual('your contact cant be a number');
  });
});
