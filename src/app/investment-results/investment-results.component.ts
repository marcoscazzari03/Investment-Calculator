import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';

import { InvesmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  private investmentService = inject(InvesmentService);

  results = computed(() => this.investmentService.resultData()); 
}
