import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-information-form',
  templateUrl: './user-information-form.component.html',
  styleUrls: ['./user-information-form.component.scss'],
})
export class UserInformationFormComponent implements OnInit {
  @Output('informationForm') informationFormEmitter =
    new EventEmitter<FormGroup>();
  informationForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this._buildInformationForm();
  }

  private _buildInformationForm() {
    this.informationForm = this._formBuilder.group({
      name: ['', [Validators.required]],
    });
  }

  private _emitInformationForm(): void {
    this.informationFormEmitter.emit(this.informationForm);
  }

  onReceiveAddressForm(addressForm: FormGroup): void {
    this.informationForm.addControl('address', addressForm);
    this._emitInformationForm();
  }
}
