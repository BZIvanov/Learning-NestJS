import { Injectable } from '@nestjs/common';

@Injectable()
export class CompanyPoliciesService {
  getPolicies() {
    return ['Respect', 'Security', 'Teamwork'];
  }
}
