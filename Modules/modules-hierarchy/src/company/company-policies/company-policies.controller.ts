import { Controller, Get } from '@nestjs/common';
import { CompanyPoliciesService } from './company-policies.service';

@Controller('policies')
export class CompanyPoliciesController {
  constructor(
    private readonly companyPoliciesService: CompanyPoliciesService,
  ) {}

  @Get()
  getAllPolicies() {
    return this.companyPoliciesService.getPolicies();
  }
}
