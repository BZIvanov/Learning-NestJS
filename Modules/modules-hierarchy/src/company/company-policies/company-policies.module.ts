import { Module } from '@nestjs/common';
import { CompanyPoliciesService } from './company-policies.service';
import { CompanyPoliciesController } from './company-policies.controller';

@Module({
  providers: [CompanyPoliciesService],
  controllers: [CompanyPoliciesController],
  exports: [CompanyPoliciesService], // <-- so IT and HR can use it
})
export class CompanyPoliciesModule {}
