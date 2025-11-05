import { Component, signal } from '@angular/core';

import { InvesmentService } from '../investment.service';


@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  enteredInitialInvestment = signal('');
  enteredAnnualInvestment = signal('');
  enteredExpectedReturn = signal('');
  enteredDuration = signal('');

  constructor(private investmentService: InvesmentService){}

  onSubmit(){
    this.investmentService.CalculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment(),
      duration: + this.enteredDuration(),
      expectedReturn: + this.enteredExpectedReturn(),
      annualInvestment: + this.enteredAnnualInvestment(),
    });
    this.enteredInitialInvestment.set('');
    this.enteredAnnualInvestment.set('');
    this.enteredExpectedReturn.set('');
    this.enteredDuration.set('');
  }
}
