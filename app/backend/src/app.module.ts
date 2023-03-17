import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { NotificationsModule } from './notifications/notifications.module';
import { HomepageModule } from './homepage/homepage.module';
import { ProjectModule } from './project/project.module';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [AuthModule, UsersModule, NotificationsModule, HomepageModule, ProjectModule, MailModule],
})
export class AppModule { }
