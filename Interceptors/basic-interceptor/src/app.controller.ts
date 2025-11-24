import {
  Controller,
  Get,
  UseInterceptors,
} from "@nestjs/common";
import { AppService } from "./app.service";
import { TransformInterceptor } from "./transform.interceptor";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseInterceptors(TransformInterceptor)
  getHello(): string {
    console.log("Handling getHello request");

    return this.appService.getHello();
  }
}
