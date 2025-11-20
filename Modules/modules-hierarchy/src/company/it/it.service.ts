import { Injectable } from '@nestjs/common';
import { CompanyPoliciesService } from '../company-policies/company-policies.service';

@Injectable()
export class ItService {
  constructor(
    private readonly companyPoliciesService: CompanyPoliciesService,
  ) {}

  getStatus() {
    return {
      department: 'IT',
      followingPolicies: this.companyPoliciesService.getPolicies(),
    };
  }
}
