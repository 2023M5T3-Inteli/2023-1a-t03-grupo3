import { Test, TestingModule } from '@nestjs/testing';
import { NotificationsController } from './notifications.controller';
import { NotificationsService } from './notifications.service';

describe('NotificationsController', () => {
  let controller: NotificationsController;
  let notifications: Notification[];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotificationsController],
      providers: [NotificationsService],
    }).compile();

    controller = module.get<NotificationsController>(NotificationsController);
  });

  it('controller should be defined', () => {
    expect(controller).toBeDefined();
  });
  describe('# get notifications', () => {
    it('should be return notifications', () => {
      const mock = [{name: 'Austin'}]
      jest.spyOn(controller, 'findAll').mockImplementation(()=> mock);
      expect(controller.findAll()).toBe(mock);
    });
  });
});
