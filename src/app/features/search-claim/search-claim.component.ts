import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-search-claim',
  imports: [MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    NgxDropzoneModule, MatSelectModule,  FormsModule
  ],
  templateUrl: './search-claim.component.html',
  styleUrl: './search-claim.component.scss'
})
export class SearchClaimComponent {
  files: File[] = [];
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  onSelect(event: any) {
    this.files.push(...event.addedFiles);
  }
  public onImportToExcel() {
    this.files = []
  }
}
