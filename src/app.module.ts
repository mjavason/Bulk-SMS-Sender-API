import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TwilioModule } from './twilio/twilio.module';
import { VcardModule } from './vcard/vcard.module';

@Module({
  imports: [TwilioModule, VcardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
