import { Module } from '@nestjs/common';
import { ItService } from './it.service';
import { ItController } from './it.controller';
import { CompanyPoliciesModule } from '../company-policies/company-policies.module';

@Module({
  imports: [CompanyPoliciesModule], // <-- IT uses policies
  providers: [ItService],
  controllers: [ItController],
})
export class ItModule {}
