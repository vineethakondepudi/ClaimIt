import { Component } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-confirmation-dialog-component',
  templateUrl: './confirmation-dialog-component.component.html',
  styleUrls: ['./confirmation-dialog-component.component.scss']
})
export class ConfirmationDialogComponentComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { message: string },
    private dialogRef: MatDialogRef<ConfirmationDialogComponentComponent>
  ) {}

  // Close the dialog and return true if confirmed, false otherwise
  confirm() {
    this.dialogRef.close(true);  // This will pass true back to the caller
  }

  cancel() {
    this.dialogRef.close(false); // This will pass false back to the caller
  }
}
