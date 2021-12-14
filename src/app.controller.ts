import { Controller, Get } from '@nestjs/common';
// import { AppService } from './app.service';
import {ItemsService} from "./app.service"
@Controller()
export class AppController {
  constructor(private readonly appService: ItemsService) {}

  @Get()
  getHello(): string {
    return "hello"
  }
}
