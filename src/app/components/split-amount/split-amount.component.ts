import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-split-amount',
  templateUrl: './split-amount.component.html',
  styleUrls: ['./split-amount.component.scss']
})
export class SplitAmountComponent implements OnInit {
  splittingForm: FormGroup;
  amount = 0.0;
  isSST = false;
  isServiceCharge = false;
  sst = 0.06;
  serviceCharge = 0.1;
  chargableAmount = 0.00;
  constructor() {}

  ngOnInit() {
    this.splittingForm = new FormGroup({
      amount: new FormControl('', [Validators.pattern('[0-9]*\.?[0-9]*')]),
      totalPeople: new FormControl('')
    });
  }

  splitBill() {
    this.chargableAmount = 0;
    if (!this.splittingForm.controls.totalPeople.value) {
      this.splittingForm.controls.totalPeople.setValue(1);
    }

    this.amount =
      this.splittingForm.controls.amount.value /
      this.splittingForm.controls.totalPeople.value;

    if (this.isSST) {
      this.chargableAmount += this.sst;
      // this.amount = this.amount * (1 + this.sst);
    }

    if (this.isServiceCharge) {
      this.chargableAmount += this.serviceCharge;
    }

    this.amount = this.amount * (1 + this.chargableAmount);
  }

  reset() {
    this.splittingForm.reset();
    this.amount = 0.0;
  }
}
