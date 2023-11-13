import { Injectable } from '@nestjs/common';
import {
  TWILIO_PHONE_NUMBER,
  TWILIO_TEST_ACCOUNT_SID,
  TWILIO_TEST_AUTH_TOKEN,
} from 'src/constants';
import * as twilio from 'twilio';

@Injectable()
export class TwilioService {
  private readonly client: twilio.Twilio;

  constructor() {
    this.client = twilio(TWILIO_TEST_ACCOUNT_SID, TWILIO_TEST_AUTH_TOKEN);
  }

  async sendSMS(to: string, body: string) {
    try {
      const message = await this.client.messages.create({
        body,
        from: TWILIO_PHONE_NUMBER,
        to,
      });

      //   return message.sid;
      return message;
    } catch (error) {
      console.error(error.message);
      return;
    }
  }
}
