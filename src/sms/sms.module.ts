import { Module } from '@nestjs/common';
import { SmsService } from './sms.service';
import { SmsController } from './sms.controller';
import { TwilioModule } from 'src/twilio/twilio.module';

@Module({
  imports: [TwilioModule],
  providers: [SmsService],
  controllers: [SmsController],
})
export class SmsModule {}
