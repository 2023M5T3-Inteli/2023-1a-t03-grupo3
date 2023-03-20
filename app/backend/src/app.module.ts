import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { HomepageModule } from './homepage/homepage.module';
import { MailModule } from './mail/mail.module';
import { NotificationsModule } from './notifications/notifications.module';
import { ProjectModule } from './project/project.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, UsersModule, NotificationsModule, HomepageModule, ProjectModule, MailModule],
})
export class AppModule { }
