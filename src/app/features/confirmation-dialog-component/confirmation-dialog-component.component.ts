import { Component } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-confirmation-dialog-component',
  imports: [MatButtonModule],
  templateUrl: './confirmation-dialog-component.component.html',
  styleUrls: ['./confirmation-dialog-component.component.scss']
})
export class ConfirmationDialogComponentComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { message: string },
    private dialogRef: MatDialogRef<ConfirmationDialogComponentComponent>
  ) {}


  confirm() {
    this.dialogRef.close(true);  
  }

  cancel() {
    this.dialogRef.close(false); 
  }
}