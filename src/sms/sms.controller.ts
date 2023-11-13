import { Controller, Get } from '@nestjs/common';
import { TwilioService } from 'src/twilio/twilio.service';

@Controller('sms')
export class SmsController {
  constructor(private readonly twilioService: TwilioService) {}

  @Get('send-sms')
  async sendSMS(): Promise<string> {
    const to = '+1234567890'; // Replace with the recipient's phone number
    const body = 'Hello, this is a test message!';

    try {
      const messageSid = await this.twilioService.sendSMS(to, body);
      return `SMS sent successfully. Message SID: ${messageSid}`;
    } catch (error) {
      return `Failed to send SMS. ${error.message}`;
    }
  }
}
