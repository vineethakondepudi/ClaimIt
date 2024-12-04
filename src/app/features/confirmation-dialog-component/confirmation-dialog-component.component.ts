import { Component } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-confirmation-dialog-component',
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
  ],
  templateUrl: './confirmation-dialog-component.component.html',
  styleUrls: ['./confirmation-dialog-component.component.scss']
})
export class ConfirmationDialogComponentComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { message: string,title:string },
    private dialogRef: MatDialogRef<ConfirmationDialogComponentComponent>
  ) {}


  confirm() {
    this.dialogRef.close(true);  
  }

  onSubmit() {
    this.dialogRef.close();

  }
  onCancel() {
    this.dialogRef.close();
  }
}
