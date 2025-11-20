import { Injectable } from '@nestjs/common';
import { CompanyPoliciesService } from '../company-policies/company-policies.service';

@Injectable()
export class HrService {
  constructor(
    private readonly companyPoliciesService: CompanyPoliciesService,
  ) {}

  getStatus() {
    return {
      department: 'HR',
      followingPolicies: this.companyPoliciesService.getPolicies(),
    };
  }
}
