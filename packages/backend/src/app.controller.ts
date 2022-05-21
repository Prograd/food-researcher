import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Hello } from './backend.types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Hello {
    return this.appService.getHello();
  }
}
