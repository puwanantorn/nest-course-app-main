import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/name')
  getName(): string {
    return this.appService.getName();
  }
  @Get('/love')
  getlove(): string {
    return this.appService.getLove();
  }
  @Get('/showjson')
  getJson(): object {
    return this.appService.getJson();
  }

  @Get('/showjson2') // localhost:3000/showjson2
  getJson2() {
    return this.appService.getJson2();
  }
}
