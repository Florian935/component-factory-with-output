import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserManagerComponent } from './component/user-manager/user-manager.component';
import { UserAddressFormComponent } from './component/user-address-form/user-address-form.component';
import { UserInformationFormComponent } from './component/user-information-form/user-information-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'src/app/shared/shared.module';

const MATERIALS = [MatFormFieldModule, MatInputModule, MatButtonModule];

@NgModule({
  declarations: [
    UserManagerComponent,
    UserAddressFormComponent,
    UserInformationFormComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    ...MATERIALS,
    SharedModule,
  ],
})
export class UserModule {}
