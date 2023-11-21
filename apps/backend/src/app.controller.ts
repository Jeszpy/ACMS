import { Controller, Get } from '@nestjs/common';

@Controller('')
export class AppController {
  @Get()
  async greet(): Promise<string> {
    return 'hello';
  }
}
