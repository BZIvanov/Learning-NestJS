import { Module } from '@nestjs/common';
import { CompanyPoliciesModule } from './company-policies/company-policies.module';
import { ItModule } from './it/it.module';
import { HrModule } from './hr/hr.module';
import { ClientsModule } from './clients/clients.module';

@Module({
  imports: [
    CompanyPoliciesModule, // root module can also access policies
    ItModule,
    HrModule,
    ClientsModule,
  ],
})
export class CompanyModule {}
