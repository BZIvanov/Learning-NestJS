import {
  Controller,
  Get,
  UseInterceptors,
} from "@nestjs/common";
import { MapToDtoInterceptor } from "./map-to-dto.interceptor.ts";
import { UserDto } from "./dtos/user.dto";

@Controller()
export class AppController {
  @Get()
  @UseInterceptors(new MapToDtoInterceptor(UserDto))
  findAll() {
    return [
      { id: 1, name: "Alex", password: "secret" },
      { id: 2, name: "Maria", password: "123" },
    ];

    /*
      Result returned to client:
      [
        { id: 1, name: 'Alex' },
        { id: 2, name: 'Maria' },
      ]
    */
  }
}
