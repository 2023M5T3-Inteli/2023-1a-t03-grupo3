import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  sendMail(): boolean {
    this.mailerService.sendMail({
      to: "example@gmail.com",
      from: '"No Reply" <noreply@gmail.com>',
      subject: "Testing Nest MailerModule",
      template: "confirmation",
    });
    return true;
  }
}
