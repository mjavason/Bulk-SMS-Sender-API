import { Module } from '@nestjs/common';
import { VcardService } from './vcard.service';

@Module({
  providers: [VcardService]
})
export class VcardModule {}
