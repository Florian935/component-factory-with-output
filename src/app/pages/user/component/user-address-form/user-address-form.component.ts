import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-address-form',
  templateUrl: './user-address-form.component.html',
  styleUrls: ['./user-address-form.component.scss'],
})
export class UserAddressFormComponent implements OnInit {
  @Output('addressForm') addressFormEmitter = new EventEmitter<FormGroup>();
  addressForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this._buildAddressForm();
  }

  private _buildAddressForm(): void {
    this.addressForm = this._formBuilder.group({
      address: ['', [Validators.required]],
    });

    this._emitAddressForm();
  }

  private _emitAddressForm(): void {
    this.addressFormEmitter.emit(this.addressForm);
  }
}
