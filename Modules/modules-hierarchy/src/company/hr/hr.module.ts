import { Module } from '@nestjs/common';
import { HrService } from './hr.service';
import { HrController } from './hr.controller';
import { CompanyPoliciesModule } from '../company-policies/company-policies.module';

@Module({
  imports: [CompanyPoliciesModule], // <-- HR uses policies too
  providers: [HrService],
  controllers: [HrController],
})
export class HrModule {}
