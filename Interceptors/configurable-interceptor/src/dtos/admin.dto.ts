import { Expose } from "class-transformer";

export class AdminDto {
  @Expose() // ensures only these fields are included when excludeExtraneousValues: true is enabled.
  username: string;

  @Expose()
  role: string;
}
