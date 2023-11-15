import {
  Controller,
  Get,
  HttpStatus,
  InternalServerErrorException,
} from '@nestjs/common';
import { MESSAGES } from '../constants';
import {
  ApiResponse,
  ApiTags,
  ApiOperation,
  ApiInternalServerErrorResponse,
  ApiBadRequestResponse,
} from '@nestjs/swagger';
import { ResponseDto } from 'src/dto';
import { TwilioService } from 'src/twilio/twilio.service';
import { SuccessResponse } from 'src/helpers/response.helper';
import { IResponseData } from 'src/interfaces/response.interface';

@Controller('sms')
@ApiTags('SMS')
@ApiResponse({
  status: HttpStatus.OK,
  type: ResponseDto,
  description: 'Successful response with data',
})
@ApiInternalServerErrorResponse({ description: MESSAGES.INTERNAL_ERROR })
@ApiBadRequestResponse({ description: MESSAGES.BAD_PARAMETERS })
export class SmsController {
  constructor(private readonly twilioService: TwilioService) {}

  @Get('/send-single-test')
  @ApiOperation({ summary: 'Send a single test SMS' })
  async sendSMS(): Promise<IResponseData<any>> {
    const to = '+2348148863871'; // Replace with the recipient's phone number
    const body = 'Hello, this is a test message!';

    const message = await this.twilioService.sendSMS(to, body);

    if (!message)
      throw new InternalServerErrorException('Unable to send sms');

    return SuccessResponse(message);
  }
}
